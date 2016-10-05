import { Component, ViewEncapsulation } from '@angular/core';
import { User } from "./shared/models/user";

@Component({
  selector: 'app',
  styleUrls: ['./shared/scss/global.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  msg = 'hello!';
  users: User[] = [
    {
      id: 234,
      name: 'hank hill',
      username: 'propane4eva'
    },
    {
      id: 235,
      name: 'bobby hill',
      username: 'alkfaeiun'
    },
    {
      id: 236,
      name: 'dale gribble',
      username: 'gunnut'
    }
  ];
  activeUser: User;
  selectUser(user){
    this.activeUser = user;
    console.log(this.activeUser);
  }
  currentYear = new Date().getFullYear()

}
