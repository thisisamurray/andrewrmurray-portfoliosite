import { Component } from '@angular/core';
import { User } from "../shared/models/user";

@Component({
  selector: 'portfolio',
  styleUrls: ['../shared/scss/main.scss'],
  template: `
    <header>
      <nav class="pure-menu pure-menu-horizontal content">
        <div class="navbar-logo pure-menu-heading">
          <a href="/" class="logo"><img src="./src/shared/img/sitelogo.svg" alt="Andrew R. Murray's Portfolio Site"/></a>
        </div>
        <ul class="pure-menu-list">
        // [routerLinkActive]="['active']"
          <li class="pure-menu-item">Projects</li>
          <li class="pure-menu-item">Experience</li>
          <li class="pure-menu-item">Contact</li>
        </ul>
      </nav>
    </header>
    <div>
      <bio></bio>
      <projects></projects>
      <timeline></timeline>
    </div>
    <footer>
      <div class="content">
        <p>All branding and images representing or affiliated with companies and organizations are full property of those institutions. Some of the work contained on this site, specifically where designated as a "marketing mockup", was created as a demonstration without the direct approval for the company represented and does not reflect the views or values of that company.</p>
        <p>All work is the property of the company listed under "Work Owned By:" section of the individual work pages. Work without a direct statement of ownership, and the look and feel of this site is the property of Andrew R. Murray.</p>
        <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"></a>&nbsp;&nbsp;&nbsp;Work owned by Andrew R. Murray and this site are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>. 2013-{{currentYear}}</p>
      </div>
    </footer>
  `
})
export class PortfolioComponent {
  currentYear = new Date().getFullYear()
}
