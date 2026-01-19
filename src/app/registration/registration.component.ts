import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registration',
  template: `
    <h2>Registration</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label>Username</label>
        <input formControlName="username">
      </div>
      <div>
        <label>Email</label>
        <input formControlName="email">
      </div>
      <div>
        <label>Password</label>
        <input type="password" formControlName="password">
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" formControlName="confirm">
      </div>
      <button type="submit" [disabled]="form.invalid">Register</button>
    </form>
  `,
  standalone: false
})
export class RegistrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  passwordMatch(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
