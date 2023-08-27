import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectsApiService } from 'src/app/shared/services/api/projects/projects-api.service';

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

  constructor(private projectsApi: ProjectsApiService) {}

  public addProject() {
    const body = this.form.getRawValue();
    body.teamSize = Number(body.teamSize);

    this.projectsApi.addProject(body).subscribe();
  }
}
