import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrackingForm } from 'src/app/data/tracking/tracking-form/tracking-form.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() data!: TrackingForm;

  @Output() changeData: EventEmitter<TrackingForm> = new EventEmitter<TrackingForm>();

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.onSetForm();
  }

  onSetForm(): void {
    this.form = this.formBuilder.group({
      project: ['', Validators.required],
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required],
      totalEstimate: [null, Validators.required],
    });
  }

  onChangeInput(): void {
    this.changeData.emit({
      ...this.data,
      projectDetails: {
        ...this.form.value,
        valid: this.form.valid
      },
    });
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
