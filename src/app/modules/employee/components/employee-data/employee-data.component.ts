import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDataComponent {}
