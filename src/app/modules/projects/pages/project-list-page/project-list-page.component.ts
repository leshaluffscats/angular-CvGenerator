import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IColumn,
  IProjectsMock,
  projectsData,
  columns,
} from 'src/app/shared/constants/projectsMockData';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListPageComponent {
  public data: IProjectsMock[] = projectsData;
  public columns: IColumn[] = columns;
}
