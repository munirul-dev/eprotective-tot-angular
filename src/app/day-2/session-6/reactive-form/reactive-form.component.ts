import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  // Helper to access form controls easily in template
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    alert('Form Submitted Successfully!\nCheck console for values.');
    console.log(this.registrationForm.value);
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
