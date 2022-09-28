import { TrackingFormEmployeeDetails } from "./tracking-form-employee-details.model";
import { TrackingFormProjectDetails } from "./tracking-form-project-details.model";

export interface TrackingForm {
  projectDetails: TrackingFormProjectDetails;
  employeeDetails: TrackingFormEmployeeDetails[];
}