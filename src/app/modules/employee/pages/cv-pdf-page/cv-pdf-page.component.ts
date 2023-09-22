import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import jsPDF from 'jspdf';
import { filter, switchMap } from 'rxjs';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';

@UntilDestroy()
@Component({
  selector: 'app-cv-pdf-page',
  templateUrl: './cv-pdf-page.component.html',
  styleUrls: ['./cv-pdf-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPdfPageComponent implements OnInit, OnDestroy, AfterViewInit {
  public cv: ICv;

  constructor(
    private cvFacade: CvsFacade,
    private activatedRoute: ActivatedRoute,
    private el: ElementRef,
    private cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.cvFacade.loadCvFromApi(params.get('id'));
          return this.cvFacade.getSelectedCv().pipe(filter(Boolean));
        }),
      )
      .subscribe(cv => {
        this.cv = cv;
        this.cdRef.markForCheck();
      });
  }

  ngAfterViewInit(): void {
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.html(this.el.nativeElement, {
      callback: (doc: { save: (arg0: string) => void }) => {
        if (confirm('Save pdf')) {
          doc.save('CV.pdf');
        }
        return;
      },
    });
  }

  ngOnDestroy(): void {
    this.cvFacade.resetSelectedCv();
  }
}
