import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      timeZone: this.fb.control('', []),
      start: this.fb.control('', []),
      end: this.fb.control('', []),
    });
  }
  onSubmit(form: FormGroup) {
    console.log("submit form ===> ", form);
    const formParams = {};
  }
}
