import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-max-min',
  templateUrl: './max-min.component.html',
  styleUrls: ['./max-min.component.scss']
})
export class MaxMinComponent {
  @Input() max!: number;
  @Input() min!: number;
  @Input() unit!: string;
}
