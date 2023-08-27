import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListPageComponent implements OnInit {
  public data$: Observable<IProject[]>;
  public columns = [
    {
      fieldValue: 'projectName',
      fieldCaption: 'Project Name',
    },
    {
      fieldValue: 'description',
      fieldCaption: 'Description',
    },
    {
      fieldValue: 'startDate',
      fieldCaption: 'Start Date',
    },
    {
      fieldValue: 'endDate',
      fieldCaption: 'End Date',
    },
  ];

  constructor(private projectsApi: ProjectsApiService) {}

  ngOnInit() {
    this.data$ = this.projectsApi.getProjects();
  }
}
