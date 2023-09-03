import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  EDIT_PROJECT,
  PROJECTS,
} from 'src/app/shared/constants/routing-paths.consts';
import { IColumn } from 'src/app/shared/interfaces/columns.interface';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectFacade } from 'src/app/store/projects/projects.facade';
import { columns } from './consts/column.const';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListPageComponent implements OnInit {
  public data$: Observable<IProject[]>;
  public columns: IColumn[] = columns;

  constructor(
    private router: Router,
    private projectsFacade: ProjectFacade,
  ) {}

  ngOnInit() {
    this.data$ = this.projectsFacade.getProjects();
  }

  public navigateToEditProject(project: IProject): void {
    this.router.navigate([PROJECTS.path, EDIT_PROJECT.path, project.id]);
  }
}
