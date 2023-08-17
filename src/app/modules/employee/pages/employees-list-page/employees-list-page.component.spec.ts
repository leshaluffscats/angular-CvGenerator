import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListPageComponent } from './employees-list-page.component';

describe('EmployeesListPageComponent', () => {
  let component: EmployeesListPageComponent;
  let fixture: ComponentFixture<EmployeesListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesListPageComponent],
    });
    fixture = TestBed.createComponent(EmployeesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
