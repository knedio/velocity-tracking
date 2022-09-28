import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.css']
})
export class InputErrorMessageComponent implements OnInit {
  @Input() show = false;
  @Input() errors!: ValidationErrors | null;

  constructor() { }

  ngOnInit(): void {
  }

}
