import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrackingFormEmployeeDetails } from 'src/app/data/tracking/tracking-form/tracking-form-employee-details.model';
import { TrackingForm } from 'src/app/data/tracking/tracking-form/tracking-form.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
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

  onChangeInput(
    row: TrackingFormEmployeeDetails,
    event: Event,
    field: string
  ): void {
    let employeeDetails: TrackingFormEmployeeDetails[] = [];
    let value = (event.target as HTMLInputElement).value;

    this.data.employeeDetails.forEach(x => {
      let tempRow: TrackingFormEmployeeDetails = {...x};
      if(row.id === x.id) {
        tempRow = {
          ...tempRow,
          [field]: value
        };
      }

      employeeDetails = [
        ...employeeDetails,
        tempRow
      ];
    });

    this.changeData.emit({
      ...this.data,
      employeeDetails
    });

  }

  onAddEmployee(isRemove = false, row?: TrackingFormEmployeeDetails): void {
    let employeeDetails = [
      ...this.data.employeeDetails,
    ];

    if(!isRemove) {
      employeeDetails = [
        ...employeeDetails,
        {
          id: Math.random() + new Date().getTime(),
          employee: '',
          estimatedHours: null,
          actualHours: null,
        }
      ];
    } else {
      employeeDetails = employeeDetails.filter(x => x.id !== (row && row.id))
    }


    this.changeData.emit({
      ...this.data,
      employeeDetails
    });
  }

  checkIfDisablePlusButton(): boolean {
    let isDisabled = false;

    for (const row of this.data.employeeDetails) {
      if(!row.employee || !row.actualHours || !row.estimatedHours) {
        isDisabled = true;
        break;
      }
    }

    return isDisabled;
  }

}
