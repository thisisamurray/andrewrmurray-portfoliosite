import { Component } from '@angular/core';
import { User } from "../shared/models/user";

@Component({
  selector: 'portfolio',
  styleUrls: ['../shared/scss/main.scss'],
  template: `
    <header>
      <nav class="navbar navbar-invert">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Andrew R. Murray</a>
        </div>
      </nav>
    </header>
    <div class="row">
      <bio></bio>
      <projects></projects>
      <timeline></timeline>
      <ul *ngIf="users">
        <li *ngFor="let user of users" class="list-group-item" (click)="selectUser(user)" [class.active]="user === activeUser">
          <p>{{user.name}}</p>
          <p>{{user.username}}</p>
        </li>
      </ul>
    </div>
    <footer class="text-center">
      <p>All branding and images representing or affiliated with companies and organizations are full property of those institutions. Some of the work contained on this site, specifically where designated as a "marketing mockup", was created as a demonstration without the direct approval for the company represented and does not reflect the views or values of that company.</p>
      <p>All work is the property of the company listed under "Work Owned By:" section of the individual work pages. Work without a direct statement of ownership, and the look and feel of this site is the property of Andrew R. Murray.</p>
      <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"></a>&nbsp;&nbsp;&nbsp;Work owned by Andrew R. Murray and this site are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>. 2013-{{currentYear}}</p>
    </footer>
  `
})
export class PortfolioComponent {
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
