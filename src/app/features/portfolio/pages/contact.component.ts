import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../../core/config/portfolio.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true
})
export class ContactComponent {
  readonly personalInfo = PERSONAL_INFO;
}
