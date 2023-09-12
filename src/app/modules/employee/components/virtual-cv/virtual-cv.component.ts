import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IProject } from 'src/app/shared/interfaces/projects.interface';
import { ProjectFacade } from 'src/app/store/projects/projects.facade';

@UntilDestroy()
@Component({
  selector: 'app-virtual-cv',
  templateUrl: './virtual-cv.component.html',
  styleUrls: ['./virtual-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvComponent implements OnInit {
  public form: FormGroup;
  public projects: IProject[];
  public selectProject: FormControl;

  constructor(
    private fb: FormBuilder,
    private projectsFacade: ProjectFacade,
  ) {
    this.selectProject = this.fb.control('');
    this.form = this.fb.group({
      employeeForm: [
        {
          firstName: '',
          lastName: '',
          email: '',
          specialization: '',
          department: '',
        },
      ],
      projectForms: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.projectsFacade
      .getProjects()
      .pipe(untilDestroyed(this))
      .subscribe((projects: IProject[]) => (this.projects = projects));
  }

  public get projectForms() {
    return this.form.get('projectForms') as FormArray;
  }

  public addProject(): void {
    const [project] = this.projects.filter(
      (project: IProject) => project.id === this.selectProject.value.id,
    );

    const projectToSet = { ...project };
    delete projectToSet.id;

    this.projectForms.push(this.fb.control(projectToSet));
  }

  public deleteProject(index: number): void {
    this.projectForms.removeAt(index);
  }
}
