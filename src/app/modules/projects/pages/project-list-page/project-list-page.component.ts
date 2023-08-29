import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IColumn } from 'src/app/shared/interfaces/columns.interface';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { AppState } from 'src/app/store';
import { getProjects } from 'src/app/store/projects/projects.actions';
import { selectProjects } from 'src/app/store/projects/projects.selector';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getProjects());
    this.data$ = this.store.select(selectProjects);
  }
}
