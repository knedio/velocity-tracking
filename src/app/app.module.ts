import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/pages/main/main.component';
import { TrackingComponent } from './modules/pages/main/components/form/tracking/tracking.component';
import { ProjectDetailsComponent } from './modules/pages/main/components/form/tracking/project-details/project-details.component';
import { EmployeeDetailsComponent } from './modules/pages/main/components/form/tracking/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackingTableComponent } from './modules/pages/main/components/table/tracking-table/tracking-table.component';
import { InputErrorMessageComponent } from './modules/pages/main/components/form/input-error-message/input-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TrackingComponent,
    ProjectDetailsComponent,
    EmployeeDetailsComponent,
    TrackingTableComponent,
    InputErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
