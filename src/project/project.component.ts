import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from "../shared/services/projects";

@Component({
  selector: "project",
  providers: [ProjectsService],
  styleUrls: ['../shared/scss/project.scss'],
  template: `
    <div class="project-detail">
      <div class="detail-bar">
        <button class="small-button" (click)="goBack()"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
        <h2><span class="label">Project:</span> {{project.name}}</h2>
      </div>
      <div class="detail-content">
        <p>{{project.desc}}</p>
      </div>
      <div class="detail-gallery">
        <div class="gallery-navigator pure-menu-horizontal">
          <ul class="navigator-buttons pure-menu-list">
            <li [class.active]="i === currentImageIndex" *ngFor="let imgButton of project.images; let i = index" (click)="updateMainImage(i)" class="pure-menu-item">
              {{i + 1}}
            </li>
          </ul>
        </div>
        <div class="gallery-container">
          <button class="swiper left" (click)="swipe(SA.LEFT)"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
          <div class="gallery_desc">
            <h3>{{project.images[currentImageIndex].title}}</h3>
            <p>{{project.images[currentImageIndex].desc}}</p>
          </div>
          <img class="gallery-image" src="{{project.images[currentImageIndex].url}}" (swipeleft)="swipe($event.type)" (swiperight)="swipe($event.type)" />
          <button class="swiper right" (click)="swipe(SA.RIGHT)"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  `,
})

export class ProjectComponent implements OnInit {
  public currentImageYOffset:number = 0;
  public currentImageIndex:number = 0;
  public project:any
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, private location: Location){}
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let uid = params['uid'];
      this.project = this.projectsService.getProject(uid);
    });
  }
  goBack(): void {
    this.location.back();
  }
  updateMainImage(index) {
    this.currentImageIndex = index;
  }
  SA = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  PA = { DOWN: 'pandown', UP: 'panup' };
  swipe(action = this.SA.RIGHT) {
    if (action === this.SA.RIGHT) {
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = this.project.images.length - 1;
      } else {
        this.currentImageIndex--;
      }
    }
    if (action === this.SA.LEFT) {
      if (this.currentImageIndex === this.project.images.length - 1) {
        this.currentImageIndex = 0;
      } else {
        this.currentImageIndex++;
      }
    }
  }
}
