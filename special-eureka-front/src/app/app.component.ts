import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'special-eureka-front';
  constructor() {
    const config = {
      apiKey: "AIzaSyDlhk8g3sr5vXuCI_Av0XHeI2eSX34xojo",
      authDomain: "special-eureka.firebaseapp.com",
      databaseURL: "https://special-eureka.firebaseio.com",
      projectId: "special-eureka",
      storageBucket: "special-eureka.appspot.com",
      messagingSenderId: "1038588559422",
      appId: "1:1038588559422:web:c01cf73b49fc230f"
    };
    firebase.initializeApp(config);
  }
}
