import { Component, Input, OnInit } from '@angular/core';
import { TrackingForm } from 'src/app/data/tracking/tracking-form/tracking-form.model';

@Component({
  selector: 'app-tracking-table',
  templateUrl: './tracking-table.component.html',
  styleUrls: ['./tracking-table.component.css']
})
export class TrackingTableComponent implements OnInit {
  @Input() employees: TrackingForm[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
