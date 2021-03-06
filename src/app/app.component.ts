import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IUser } from '../models/iuser';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  static currentUser: IUser|void =
    localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : undefined;

  /**
   * If user loggedIn take him to tabs page, 
   * else show login page.
   */
  rootPage: any = MyApp.currentUser ? TabsPage : Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

