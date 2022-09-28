// enum Project {
//   Test1 = 'Test1',
//   Test2 = 'Test2',
//   Test3 = 'Test3'
// }

export interface TrackingFormProjectDetails {
  project: string;
  taskTitle: string;
  taskDescription: string;
  totalEstimate: number;
  valid: boolean;
}
