import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'edit-employee-page-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeePageComponent {}
