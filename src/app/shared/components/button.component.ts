import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button 
      [type]="type()"
      [disabled]="disabled()"
      [class]="buttonClass()"
    >
      <ng-content />
    </button>
  `,
  standalone: true,
  styles: [`
    button {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%);
      box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
      transform: translateY(-2px);
    }

    .btn-primary:active:not(:disabled) {
      transform: translateY(0);
    }

    .btn-secondary {
      background: #e2e8f0;
      color: #1e293b;
      border: 2px solid transparent;
    }

    .btn-secondary:hover:not(:disabled) {
      background: #4f46e5;
      color: white;
      border-color: #4f46e5;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  variant = input<'primary' | 'secondary'>('primary');

  buttonClass() {
    const baseClass = 'btn';
    const variantClass = this.variant() === 'primary' ? 'btn-primary' : 'btn-secondary';
    return `${baseClass} ${variantClass}`;
  }
}
