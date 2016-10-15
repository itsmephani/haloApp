import {NavController} from 'ionic-angular';
import {Injectable} from '@angular/core';


@Injectable()
export class NavigationService {
  
  constructor(private nav: NavController) {
    
  }
  
  goTo(component: any, navParams: Object = {}) {
    this.nav.push(component, navParams);
  }  
}
