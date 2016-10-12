import {NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {RecaptchaModule} from 'ng2-recaptcha/ng2-recaptcha';
import 'hammerjs';

import {BioComponent} from './bio/bio.component';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects/projects.component';
import {TimelineComponent} from './timeline/timeline.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {ContactNoFormComponent} from './contact/contact-noform.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

@NgModule ({
  imports: [
    BrowserModule,
    routing,
    DragulaModule,
    FormsModule,
    HttpModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [
    AppComponent,
    BioComponent,
    ProjectsComponent,
    TimelineComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    ContactNoFormComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
