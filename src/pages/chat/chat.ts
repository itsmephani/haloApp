import {Component} from '@angular/core';

@Component({
  templateUrl: 'chat.html',
})
export class Chat {

  constructor() {
    console.log(window['ActionCable']);

  }
}
