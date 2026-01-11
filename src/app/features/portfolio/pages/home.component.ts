import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO, SKILLS } from '../../../core/config/portfolio.config';
import { ButtonComponent } from '../../../shared/components/button.component';
import { CardComponent } from '../../../shared/components/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, CardComponent]
})
export class HomeComponent {
  // Expose config to template
  readonly personalInfo = PERSONAL_INFO;
  readonly skills = SKILLS;

  // Computed for easy access
  readonly skillsGrouped = computed(() => 
    this.skills.map(skill => ({
      ...skill,
      items: skill.items
    }))
  );
}
