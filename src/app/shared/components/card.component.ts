import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div [class]="cardClass()">
      <ng-content />
    </div>
  `,
  standalone: true,
  styles: [`
    div {
      @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow;
    }
  `]
})
export class CardComponent {
  variant = input<'default' | 'hover'>('default');

  cardClass = () => {
    const baseClass = 'bg-white rounded-lg shadow-md p-6';
    const variantClass = this.variant() === 'hover'
      ? 'hover:shadow-lg transition-shadow'
      : '';
    return `${baseClass} ${variantClass}`;
  };
}
