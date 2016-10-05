import {Component} from "@angular/core";
import {ProjectsService} from "../shared/services/projects";

@Component({
  selector: "projects",
  providers: [ProjectsService],
  template: `
    <h2>Projects:</h2>
    <ul>
      <li *ngFor="let key of projectKeys">
        <p>{{ allProjects[key].name }}</p>
        <p>{{ allProjects[key].desc }}</p>
        <a [routerLink]="['/project', key]" class="button">Learn More {{key}}</a>
      </li>
    </ul>
  `,
})

export class ProjectsComponent {
  constructor(private projectsService: ProjectsService){};
  public allProjects = this.projectsService.getProjects();
  public projectKeys = Object.keys(this.allProjects);
}
