import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-titles',
  templateUrl: './page-titles.component.html',
  styleUrls: ['./page-titles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitlesComponent {}
