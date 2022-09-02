import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogged = 'admin';
  isLogin = 'login';
  errorLogin = false;


  constructor(private authServ: AuthenticationService) {
  }

  ngOnInit() {
  }

  async onLogin(email, password) {
    try {
      const user = await this.authServ.SignIn(email.value, password.value);
      if (user) {
        this.authServ.redirectUser(this.isLogged);
      } else {
        this.errorLogin = true;
        this.authServ.redirectUser(this.isLogin);
      }
    } catch (error) {
      console.log('ErrorOnlogin->', error);
    }
  }


}
