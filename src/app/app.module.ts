import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Chat } from '../pages/chat/chat';
import { Login } from '../pages/login/login';
import { Post } from '../pages/post/post';
import { Profile } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Chat,
    Login,
    Post,
    Profile,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Chat,
    Login,
    Post,
    Profile,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
