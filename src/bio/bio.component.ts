import {Component} from "@angular/core";

@Component({
  selector: "bio",
  styleUrls: ['../shared/scss/bio.scss'],

  template: `
    <div class="billboard">
      <div class="panel">
        <div class="bio row">
          <div class="bio-photo small-12 medium-4 columns">
            <button class="clear-selection" (click)="CurrentPoint = MainPoint" *ngIf="CurrentPoint !== MainPoint">
              <i class="fa fa-times"></i>
            </button>
            <img src="{{CurrentPoint.img}}" />
            <div class="panel-controls pure-menu pure-menu-horizontal">
              <ul class="menu">
                <li *ngFor="let point of BioPoints" (click)="onPointClicked(BioPoints.indexOf(point))" [class.active]="point === CurrentPoint">
                  <button><img src="{{ point.img }}" alt="{{ point.name }}" /></button>
                </li>
              </ul>
            </div>
          </div>
          <div class="bio-content small-12 medium-8 columns">
            <div class="panel-content">
              <h1>{{ CurrentPoint.name }}</h1>
              <div [innerHTML]="CurrentPoint.desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class BioComponent {
  public BioPoints = [
    {name: "UI/UX", desc: "No matter how complex the functionality or how simple the minds, I will find the perfect way for your users to use your utilities and find usefulness in your usage.", img: "./src/shared/img/workTile2_uiux.svg"},
    {name: "Design", desc: "Over 8 years of constructing emails, developing Facebook Apps, crafting websites, designing brochures, and creating logos has made who I am today.", img: "./src/shared/img/workTile2_design.svg"},
    {name: "Development", desc: "I know HTML5, CSS3, AngularJS, ReactJS and can learn to leverage any other Javascript framework in order to bring your idea to life.", img: "./src/shared/img/workTile2_develop.svg"},
    {name: "Strategy", desc: "Two years of experience managing a small team and brand direction allows me to plot the quickest path to complete tasks and find the best way to devour your latest project.", img: "./src/shared/img/workTile2_strategy.svg"}
  ];
  public MainPoint = {
    name:"About Me",
    desc: `<p>By wearing multiple hats and providing great team flexibility, I've successfully worked in the fast-paced and chaotic environment of start-up companies for the past 6 years.</p>
    <p>My roles have always led into providing an ever-evolving design direction, managing teams to improve product and processes, and turning people’s ideas into reality with a strong knowledge of Mobile-First Web Application Development, Javascript Frameworks and Full-Stack Environments.</p>`,
    img: "./src/shared/img/armurray_biophoto.png"
  };
  public CurrentPoint = this.MainPoint;

  onPointClicked = (pointIndex) => {
    this.CurrentPoint = this.BioPoints[pointIndex];
  };
}
