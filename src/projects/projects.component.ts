import {Component} from "@angular/core";
import {ProjectsService} from "../shared/services/projects";

@Component({
  selector: "projects",
  providers: [ProjectsService],
  styleUrls: ['../shared/scss/projects.scss'],
  template: `
    <h2>Projects:</h2>
    <ul class="projects-list">
      <li *ngFor="let key of projectKeys">
        <h2 class="project-title">{{ allProjects[key].name }}</h2>
        <p class="project-elevator">{{ allProjects[key].desc }}</p>
        <a [routerLink]="['/project', key]" class="button project-link">Learn More {{key}}</a>
      </li>
    </ul>
  `,
})

export class ProjectsComponent {
  constructor(private projectsService: ProjectsService){};
  public allProjects = this.projectsService.getProjects();
  public projectKeys = Object.keys(this.allProjects);
}
