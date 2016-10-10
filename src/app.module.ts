import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms'
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import 'hammerjs';

import {BioComponent} from './bio/bio.component';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects/projects.component';
import {TimelineComponent} from './timeline/timeline.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

@NgModule ({
  imports: [
    BrowserModule,
    routing,
    DragulaModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BioComponent,
    ProjectsComponent,
    TimelineComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
