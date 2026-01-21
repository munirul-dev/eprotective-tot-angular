import { Component } from '@angular/core';

@Component({
  selector: 'app-runtime-error',
  standalone: false,
  templateUrl: './runtime-error.component.html',
  styles: [`
    .error-box { border: 2px dashed #ff5252; padding: 15px; margin-bottom: 20px; background-color: rgba(255, 0, 0, 0.05); }
    button { margin-right: 10px; margin-bottom: 10px; }
    .hint { color: #aaa; font-style: italic; margin-top: 10px; font-size: 0.9em; }
  `]
})
export class RuntimeErrorComponent {
  user: any;
  items: any[] | null = null;

  constructor() {
    // Intentionally undefined user
    // this.user = { name: 'Alice' }; 
  }

  throwUndefinedProperty() {
    // BUG: user is undefined
    alert('User name is: ' + this.user.name);
  }

  throwNullAccess() {
    // BUG: items is null
    console.log('Items length: ' + this.items!.length);
  }

  safeOperation() {
    const safeName = this.user?.name || 'Anonymous';
    alert('Safe User Name: ' + safeName);
  }
}
