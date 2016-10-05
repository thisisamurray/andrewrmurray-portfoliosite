import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {BioComponent} from './bio/bio.component';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects/projects.component';
import {TimelineComponent} from './timeline/timeline.component';
import {PortfolioComponent} from './portfolio/portfolio.component';


@NgModule ({
  imports: [BrowserModule, routing],
  declarations: [
    AppComponent,
    BioComponent,
    ProjectsComponent,
    TimelineComponent,
    PortfolioComponent,
    ProjectComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
