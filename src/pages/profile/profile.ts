import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {IUser} from '../../models/iuser';

@Component({
  templateUrl: 'profile.html'
})
export class Profile {
  userProfile: IUser|void;
  editMode: boolean = false;

  constructor(private navParams: NavParams) {
    this.userProfile = MyApp.currentUser;
    console.log(this.navParams);
  }
  
  updateProfile() {
    localStorage.setItem('currentUser', JSON.stringify(this.userProfile));
    MyApp.currentUser = this.userProfile;
    this.editMode = false;
  }
}
