import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataPageComponent } from './edit-employee-page.component';

describe('EmployeeDataPageComponent', () => {
  let component: EmployeeDataPageComponent;
  let fixture: ComponentFixture<EmployeeDataPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDataPageComponent],
    });
    fixture = TestBed.createComponent(EmployeeDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
