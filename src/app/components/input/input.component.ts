import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() type: string = "text";
  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() autocomplete: "on" | "off" = "off";
  @Input() label!: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();


  onChange() {
    this.onValueChange.emit(this.name);
  }
}
