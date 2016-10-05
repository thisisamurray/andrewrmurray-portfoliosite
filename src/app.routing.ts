import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'project/:uid',
    component: ProjectComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
