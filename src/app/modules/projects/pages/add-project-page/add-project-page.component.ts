import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  ADD_PROJECT,
  PROJECTS,
} from 'src/app/shared/constants/routing-paths.consts';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';
import { CommonFacade } from 'src/app/store/common/common.facade';

@UntilDestroy()
@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectPageComponent implements OnInit {
  public form = new FormControl({
    projectName: '',
    startDate: '',
    endDate: '',
    teamSize: null,
    techStack: [],
    description: '',
    responsibilities: [],
    teamRoles: [],
  });

  constructor(
    private projectsApi: ProjectsApiService,
    private router: Router,
    private commonFacade: CommonFacade,
  ) {}

  public ngOnInit(): void {
    this.commonFacade.pushToBreadCrumbs([
      { label: 'Projects', routerLink: PROJECTS.path },
      { label: 'Add', routerLink: PROJECTS.path + ADD_PROJECT.fullPath },
    ]);
  }

  public addProject() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }

    this.projectsApi
      .addProject(this.form.getRawValue())
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate([PROJECTS.path]));
  }
}
