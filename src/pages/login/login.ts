import {AlertController, NavController} from 'ionic-angular';
import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/iuser';
import {MyApp} from '../../app/app.component';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from './login-service';


@Component({
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class Login implements OnInit{
  private user: IUser;
  private userAction: string = 'login';
  private myApp: any = MyApp;
  private nav: any;
  
  constructor(public alertCtrl: AlertController, nav: NavController, private loginService: LoginService) {
    this.nav = nav;
    this.initUser();
  }
  
  ngOnInit() {
        
  }
  
  initUser() {
    this.user = {name: ''};
  }
  
  setCurrentUser(user: IUser) {
    this.myApp.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));    
  }
  
  login() {
    this.loginService.login({user: this.user}).
      subscribe(response => {
        this.setCurrentUser(response.json()['data']);
        this.initUser();
        this.navigateToTabsPage();
      }, (error) => this.error(error));
  }
  
  signUp() {
    this.loginService.signUp({user: this.user}).
      subscribe(response => {
        this.setCurrentUser(response.json()['data']);
        this.initUser();
        this.navigateToTabsPage();
      });
  }
  
  navigateToTabsPage() {
    this.nav.pop();
    this.nav.setRoot(TabsPage);
  }

  error(errorSummary) {
    let errors = errorSummary.json().errors;
     let alert = this.alertCtrl.create({
      title: 'SignUp!',
      subTitle: errors[0]['message'],
      buttons: ['OK']
    });
    this.nav.present(alert);
  }
}
