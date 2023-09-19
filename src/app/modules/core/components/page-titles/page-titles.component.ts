import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { ITitle } from 'src/app/shared/interfaces/titles.interface';
import { CommonFacade } from 'src/app/store/common/common.facade';

@UntilDestroy()
@Component({
  selector: 'app-page-titles',
  templateUrl: './page-titles.component.html',
  styleUrls: ['./page-titles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitlesComponent implements OnInit {
  public breadcrumbs: Observable<IBreadCrumb[]>;
  public titles: ITitle;

  constructor(
    private commonFacade: CommonFacade,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.breadcrumbs = this.commonFacade.getBreadCrumbs();
    this.commonFacade
      .getTitles()
      .pipe(untilDestroyed(this), filter(Boolean))
      .subscribe(titles => {
        this.titles = titles;
        this.cdRef.markForCheck();
      });
  }
}
