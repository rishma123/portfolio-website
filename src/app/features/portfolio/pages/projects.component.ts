import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../core/config/portfolio.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
