import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
//import { User } from '../shared/user.interface';
import {Router} from '@angular/router';
//import { Firebase } from 'ionic-native';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorLogin = 'ErrorLogin ->';
  errorVerificationEmailFireBase = 'ErrorVerificationEmailFireBase->';
  errorRegisterFireBase = 'ErrorRegisterFireBase ->';

  constructor(private afAuth: AngularFireAuth, private  router: Router) {
  }

  async login(email: string, password: string) {
    try {
      return (await this.afAuth.signInWithEmailAndPassword(email, password));
    } catch (error) {
      console.log(this.errorLogin, error);
    }
  }

  async registerFirebase(email: string, password: string) {
    try {
      await this.verificationEmailFirebase();
      return (await this.afAuth.createUserWithEmailAndPassword(email, password));
    } catch (error) {
      console.log(this.errorRegisterFireBase, error);
    }
  }

  async verificationEmailFirebase(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log(this.errorVerificationEmailFireBase, error);
    }
  }

  redirectUser(router: string) {
    this.router.navigate([router]);
  }
}
