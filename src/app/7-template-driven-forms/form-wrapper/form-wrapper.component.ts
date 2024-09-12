import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.css',
})
export class FormWrapperComponent {
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription: string = this.subscriptions[1];
  @ViewChild('signupForm', { static: false }) sgnForm: NgForm;
  passwordPlaceholder: string = 'Enter Password';

  onSubmit() {
    if (this.sgnForm.valid) {
      console.log(this.sgnForm.value);
    }
  }
}
