import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PROJECT_LIST_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';

@UntilDestroy()
@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectPageComponent {
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
  ) {}

  public addProject() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }

    this.projectsApi
      .addProject(this.form.getRawValue())
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigate([PROJECT_LIST_PATH.path]));
  }
}
