import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: IBreadCrumb[];
}
