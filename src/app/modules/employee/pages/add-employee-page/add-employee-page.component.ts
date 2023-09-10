import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ADD_EMPLOYEE,
  EMPLOYEES,
} from 'src/app/shared/constants/routing-paths.consts';
import { CommonFacade } from 'src/app/store/common/common.facade';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeePageComponent implements OnInit {
  constructor(private commonFacade: CommonFacade) {}

  ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Employess', routerLink: EMPLOYEES.path },
      { label: 'Add', routerLink: EMPLOYEES.path + ADD_EMPLOYEE.fullPath },
    ]);
  }
}
