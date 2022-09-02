import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isRegistered = 'admin';
  registerError = 'register';
  errorRegister = false;

  constructor(private authServ: AuthenticationService) {
  }

  ngOnInit() {
  }

  async onRegister(email, password) {
    try {
      const user = await this.authServ.RegisterUser(email.value, password.value);
      if (user) {
        this.authServ.redirectUser(this.isRegistered);
      } else {
        this.errorRegister = true;
        this.authServ.redirectUser(this.registerError);
      }
    } catch (error) {
      console.log('ErrorOnRegister', error);
    }
  }

}
