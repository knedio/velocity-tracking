import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackingForm } from 'src/app/data/tracking/tracking-form/tracking-form.model';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  @Input() show = false;
  @Output() add: EventEmitter<TrackingForm> = new EventEmitter<TrackingForm>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  trackForm: TrackingForm = {
    projectDetails: {
      project: '',
      taskTitle: '',
      taskDescription: '',
      totalEstimate: 0,
      valid: false
    },
    employeeDetails: [{
      id: Math.random() + new Date().getTime(),
      employee: '',
      estimatedHours: null,
      actualHours: null,
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onChangeForm(data: TrackingForm): void {
    this.trackForm = {...data};
  }

  onSave(): void {
    this.add.emit(this.trackForm);
  }

  get isDisabledForm(): boolean {
    return this.trackForm.projectDetails.valid;
  }

}
