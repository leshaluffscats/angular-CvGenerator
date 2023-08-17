import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCvComponent } from './virtual-cv.component';

describe('VirtualCvComponent', () => {
  let component: VirtualCvComponent;
  let fixture: ComponentFixture<VirtualCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualCvComponent],
    });
    fixture = TestBed.createComponent(VirtualCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
