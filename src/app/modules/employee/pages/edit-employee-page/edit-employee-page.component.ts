import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  EDIT_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { CommonFacade } from 'src/app/store/common/common.facade';

@Component({
  selector: 'edit-employee-page-page',
  templateUrl: './edit-employee-page.component.html',
  styleUrls: ['./edit-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeePageComponent implements OnInit {
  constructor(private commonFacade: CommonFacade) {}

  ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Employess', routerLink: EMPLOYEES.path },
      { label: 'Edit', routerLink: EMPLOYEES.path + EDIT_EMPLOYEE.fullPath },
    ]);
  }
}
