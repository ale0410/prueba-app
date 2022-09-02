import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
//import { Splashscreen } from 'ionic-native';
//import { StatusBar } from 'ionic-native';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  items: Observable<any[]>;

  constructor(
    firestore: AngularFirestore,
    private platform: Platform,
    //private splashScreen: Splashscreen,
    //private statusBar: StatusBar
    ) {
    this.items = firestore.collection('items').valueChanges();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar;
      //this.splashScreen;
    });
  }
}
