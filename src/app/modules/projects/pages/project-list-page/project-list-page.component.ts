import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IColumnName,
  IProjectsMock,
  projectsData,
} from 'src/app/shared/constants/projectsMockData';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListPageComponent {
  public data: IProjectsMock[] = projectsData;
  public columns: IColumnName[] = [
    { fieldValue: 'name', fieldCaption: 'Name' },
    { fieldValue: 'startDate', fieldCaption: 'Start date' },
    { fieldValue: 'endDate', fieldCaption: 'End date' },
    { fieldValue: 'id', fieldCaption: 'id' },
    { fieldValue: 'techStack', fieldCaption: 'Tech stack' },
  ];
}
