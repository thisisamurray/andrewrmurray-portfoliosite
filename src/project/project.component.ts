import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from "../shared/services/projects";

@Component({
  selector: "project",
  providers: [ProjectsService],
  template: `
    <button (click)="goBack()">Back</button>
    <h2>Project: {{project.name}}</h2>
    <img src="{{project.preview_image}}" />
    <h1>{{project.name}}</h1>
    <p>{{project.desc}}</p>
  `,
})

export class ProjectComponent implements OnInit {
  public project:any
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, private location: Location){}
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let uid = params['uid'];
      this.project =this.projectsService.getProject(uid);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
