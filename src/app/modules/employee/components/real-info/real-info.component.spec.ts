import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealInfoComponent } from './real-info.component';

describe('RealInfoComponent', () => {
  let component: RealInfoComponent;
  let fixture: ComponentFixture<RealInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealInfoComponent],
    });
    fixture = TestBed.createComponent(RealInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
