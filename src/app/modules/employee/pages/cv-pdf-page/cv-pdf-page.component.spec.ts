import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPdfPageComponent } from './cv-pdf-page.component';

describe('CvPdfPageComponent', () => {
  let component: CvPdfPageComponent;
  let fixture: ComponentFixture<CvPdfPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvPdfPageComponent],
    });
    fixture = TestBed.createComponent(CvPdfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
