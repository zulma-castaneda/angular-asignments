import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-wrapper',
  templateUrl: './reactive-wrapper.component.html',
  styleUrl: './reactive-wrapper.component.css',
})
export class ReactiveWrapperComponent implements OnInit {
  projectForm: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, this.invalidProjectName.bind(this)],
        this.asyncInvalidProjectName.bind(this)
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.statuses[0]),
    });
  }
  onSaveProject() {
    console.log(this.projectForm.value);
  }

  invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
}
