import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from "../shared/services/projects";

@Component({
  selector: "project",
  providers: [ProjectsService],
  template: `
    <h2>Project: {{project.name}}</h2>
    <h1>READY</h1>
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
}
