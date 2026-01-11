import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../core/config/portfolio.config';
import { CardComponent } from '../../../shared/components/card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
