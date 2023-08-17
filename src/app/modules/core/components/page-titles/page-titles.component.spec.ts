import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitlesComponent } from './page-titles.component';

describe('PageTitlesComponent', () => {
  let component: PageTitlesComponent;
  let fixture: ComponentFixture<PageTitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTitlesComponent],
    });
    fixture = TestBed.createComponent(PageTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
