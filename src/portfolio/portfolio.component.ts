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
      <div class="skills">
        <h2 class="section-header">Skills</h2>
        <div class="pure-g" style="max-width: 1000px;">
          <div class="skill pure-u-1-2">
            <h3>Development &amp; Design</h3>
            <ul>
              <li>
                <b>Web Technologies &amp; Software</b>
                <p>HTML 5, CSS 3, SCSS, Javascript/JQuery, Angular, ReactJS, PHP, MySQL, noSQL MVC Structure, Foundation/Bootstrap, and Mobile Optimization</p>
              </li>
              <li>
                <b>Workflow &amp; Speciality</b>
                <p>Subversion Control, Facebook App Development, Wordpress, Anchor CMS, Amazon Web Services, Google Webmaster Tools, and Virtualbox VM</p>
              </li>
              <li>
                <b>Analytics &amp; Help Desk</b>
                <p>Google Analytics, KISSmetrics, Mixpanel, Intercom, Desk.com, Zendesk</p>
              </li>
              <li>
                <b>Design Software &amp; Prototyping</b>
                <p>Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Balsamiq Mockups, Omnigraffle, Marvelapp.com, and Sketchup</p>
              </li>
            </ul>
          </div>
          <div class="skill pure-u-1-2">
            <h3>Product &amp; Process</h3>
            <ul>
              <li>
                <b>Team Workflows</b>
                <p>Organize team meetings to focus priorities and design step-by-step workflows enabling multiple departments to work together through minimizing mistakes and redundancies.</p>
              </li>
              <li>
                <b>Long-Term Project Planning</b>
                <p>Established strategy and tactical plans to reach goals, estimate work-hours, and outline development schedules to quickly and efficiently devour tasks.</p>
              </li>
              <li>
                <b>Client Campaign Support</b>
                <p>Helped clients develop campaign strategies by outlining main goals, aided client asset creation directly or supported through templates to decrease onboarding time and launch preparation.</p>
              </li>
              <li>
                <b>Leading Small Teams</b>
                <p>Led a team of 5+ designers and front-end developers through projects including implementing client campaigns, app UIs, design and publishing of marketing and sales support materials.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact">

      </div>
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
