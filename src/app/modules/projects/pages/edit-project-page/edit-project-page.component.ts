import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { skip, switchMap } from 'rxjs';
import { PROJECT_LIST_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';
import { ProjectFacade } from 'src/app/store/projects/projects.facade';

@UntilDestroy()
@Component({
  selector: 'app-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styleUrls: ['./edit-project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProjectPageComponent implements OnInit {
  public form: FormControl = new FormControl({
    projectName: '',
    startDate: '',
    endDate: '',
    teamSize: null,
    techStack: [],
    description: '',
    responsibilities: [],
    teamRoles: [],
  });

  private projectId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsFacade: ProjectFacade,
    private projectsApi: ProjectsApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.projectId = params.get('id');
          return this.projectsFacade.getProjectById(params.get('id'));
        }),
        skip(1),
        untilDestroyed(this),
      )
      .subscribe((project: IProject) => {
        this.form.setValue({
          projectName: project.projectName,
          startDate: project.startDate,
          endDate: project.endDate,
          teamSize: project.teamSize,
          techStack: project.techStack,
          description: project.description,
          responsibilities: project.responsibilities,
          teamRoles: project.teamRoles,
        });
      });
  }

  public editProject(): void {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }

    this.projectsApi
      .updateProject(this.projectId, this.form.getRawValue())
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate([PROJECT_LIST_PATH.path]));
  }

  public deleteProject(): void {
    this.projectsApi
      .deleteProject(this.projectId)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
