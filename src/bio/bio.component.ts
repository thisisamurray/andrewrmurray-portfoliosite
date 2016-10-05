import {Component} from "@angular/core";

@Component({
  selector: "bio",
  template: `
    <p>What I Do:</p>
    <p>{{ CurrentPoint.desc }}</p>
    <ul>
      <li *ngFor="let point of BioPoints" (click)="onPointClicked(BioPoints.indexOf(point))">
        <button>{{ point.name }}</button>
      </li>
    </ul>
  `
})

export class BioComponent {
  public BioPoints = [
    {name:"", desc: "From dabbling in online and print work, to running my own business and creating workflows for teams, I have juggled many roles and possess the skills to take on your immediate design and UX needs."},
    {name: "UI/UX", desc: "No matter how complex the functionality or how simple the minds, I will find the perfect way for your users to use your utilities and find usefulness in your usage."},
    {name: "Design", desc: "Over 8 years of constructing emails, developing Facebook Apps, crafting websites, designing brochures, and creating logos has made who I am today."},
    {name: "Development", desc: "I know HTML5, CSS3, JQuery, PHP, MySQL and a whole bunch of other letter combinations I use to conceptualize your idea and bring it to life."},
    {name: "Strategy", desc: "Two years of experience managing a small team and brand direction allows me to plot the quickest path to complete tasks and find the best way to devour your latest project."}
  ];
  public CurrentPoint = this.BioPoints[0];

  onPointClicked = (pointIndex) => {
    this.CurrentPoint = this.BioPoints[pointIndex];
  };
}
