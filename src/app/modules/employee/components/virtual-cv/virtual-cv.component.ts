import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-virtual-cv',
  templateUrl: './virtual-cv.component.html',
  styleUrls: ['./virtual-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvComponent {
  public employeeForm: FormControl = new FormControl({
    firstName: '',
    lastName: '',
    email: '',
    specialization: '',
    department: '',
    skills: '',
  });

  constructor() {}
}
