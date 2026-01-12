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
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid #e5e7eb;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      border-color: #4f46e5;
      box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
      transform: translateY(-4px);
    }

    .card-elevated {
      background: linear-gradient(135deg, #f8fafc 0%, white 100%);
      border: 1px solid rgba(79, 70, 229, 0.1);
    }

    .card-elevated:hover {
      border-color: #4f46e5;
      box-shadow: 0 20px 40px rgba(79, 70, 229, 0.2);
    }
  `]
})
export class CardComponent {
  variant = input<'default' | 'elevated'>('default');

  cardClass() {
    const baseClass = 'card';
    const variantClass = this.variant() === 'elevated' ? 'card-elevated' : '';
    return `${baseClass} ${variantClass}`.trim();
  }
}
