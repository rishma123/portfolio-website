import { Routes } from '@angular/router';
import { HomeComponent } from './features/portfolio/pages/home.component';
import { ProjectsComponent } from './features/portfolio/pages/projects.component';
import { ContactComponent } from './features/portfolio/pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
