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
      @apply px-6 py-3 rounded-lg font-medium transition-all;
    }
    button:disabled {
      @apply opacity-50 cursor-not-allowed;
    }
  `]
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input(false);
  variant = input<'primary' | 'secondary'>('primary');

  buttonClass = () => {
    const baseClass = 'px-6 py-3 rounded-lg font-medium transition-all';
    const variantClass = this.variant() === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400'
      : 'bg-slate-200 text-slate-800 hover:bg-slate-300 disabled:bg-slate-100';
    return `${baseClass} ${variantClass}`;
  };
}
