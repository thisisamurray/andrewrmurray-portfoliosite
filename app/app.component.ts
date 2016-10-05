import { Component } from '@angular/core';
import { User } from "./shared/models/user";

@Component({
  selector: 'invoice-app',
  templateUrl: './app/app.component.html',
  styles: [`
    .jumbotron {box-shadow: 0 2px 0 black}
    .list-group-item {cursor: pointer;
      
    }
    .list-group-item.active {background-color: lime;}
  `]
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

}
