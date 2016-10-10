import {Component} from "@angular/core";
import {ProjectsService} from "../shared/services/projects";

@Component({
  selector: "projects",
  providers: [ProjectsService],
  styleUrls: ['../shared/scss/projects.scss'],
  template: `
    <h2 class="section-header">Projects:</h2>
    <ul class="projects-list">
      <li *ngFor="let key of projectKeys">
        <a [routerLink]="['/projects', key]" class="project-link">
          <img src="{{allProjects[key].preview_image}}" />
        </a>
        <h2 class="project-title">{{ allProjects[key].name }}</h2>
        <p class="project-elevator">{{ allProjects[key].ele }}</p>
      </li>
    </ul>
  `,
})

export class ProjectsComponent {
  constructor(private projectsService: ProjectsService){};
  public allProjects = this.projectsService.getProjects();
  public projectKeys = Object.keys(this.allProjects);
}
