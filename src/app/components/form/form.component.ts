import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      temperature: this.fb.control('celsius'),
    });

    this.form.valueChanges.subscribe(res => {
      const params = {
        "temperature_unit": res.temperature,
      }
      this.onChange.emit(params);
    })
  }
}
