import {Component} from '@angular/core';
import {Post} from '../post/post';
import {Chat} from '../chat/chat';
import {Profile} from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabs: any = [
    { root: Post, title: 'Feed', icon: 'pulse' },
    { root: Chat, title: 'Chat', icon: 'chatbubbles' },
    { root: Profile, title: 'Profile', icon: 'person' }
  ];  

  
}
