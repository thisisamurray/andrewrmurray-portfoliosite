import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {BioComponent} from './bio/bio.component';
import {ProjectsComponent} from './projects/projects.component';
import {TimelineComponent} from './timeline/timeline.component';

@NgModule ({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    BioComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
