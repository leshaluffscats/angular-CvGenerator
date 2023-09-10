import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
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

  constructor(private commonFacade: CommonFacade) {}

  ngOnInit(): void {
    this.breadcrumbs = this.commonFacade.getBreadCrumbs();
  }
}
