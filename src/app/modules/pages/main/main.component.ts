import { Component, OnInit } from '@angular/core';
import { TrackingForm } from 'src/app/data/tracking/tracking-form/tracking-form.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  employees: TrackingForm[] = [];
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeData(data: TrackingForm): void {
    this.employees = [
      ...this.employees,
      data
    ];

    this.onShowModal();
  }

  onShowModal(): void {
    this.show = !this.show;
  }

}
