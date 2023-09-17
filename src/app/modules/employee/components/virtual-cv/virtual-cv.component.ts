import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  INameAndId,
  IProject,
} from 'src/app/shared/interfaces/projects.interface';
import { CvsService } from 'src/app/shared/services/cvs/cvs.service';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty.utils';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';
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
  public cvNames: INameAndId[] = [];
  private cvs: ICv[];

  constructor(
    private fb: FormBuilder,
    private projectsFacade: ProjectFacade,
    private cvsFacade: CvsFacade,
    private cdRef: ChangeDetectorRef,
    private cvService: CvsService,
  ) {
    this.selectProject = this.fb.control('');
    this.form = this.fb.group({
      cvName: ['', [Validators.required]],
      employeeForm: [
        {
          firstName: '',
          lastName: '',
          email: '',
          specialization: '',
          department: '',
        },
      ],
      skills: ['', [Validators.required]],
      projectForms: this.fb.array([]),
      languageForms: this.fb.array([]),
    });
  }
  public ngOnInit(): void {
    this.projectsFacade
      .getProjects()
      .pipe(untilDestroyed(this))
      .subscribe((projects: IProject[]) => (this.projects = projects));

    this.cvsFacade
      .getCvs()
      .pipe(untilDestroyed(this))
      .subscribe((cvs: ICv[]) => (this.cvs = cvs));
  }

  public get projectForms() {
    return this.form.get('projectForms') as FormArray;
  }

  public get languageForms() {
    return this.form.get('languageForms') as FormArray;
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

  public addLanguage() {
    this.languageForms.push(
      this.fb.group({
        name: this.fb.control('', Validators.required),
        level: this.fb.control('', Validators.required),
      }),
    );
  }

  public deleteLanguage(index: number): void {
    this.languageForms.removeAt(index);
  }

  public addCvRow(): void {
    if (this.form.valid) {
      const cv = this.form.getRawValue();
      const id = Date.now();
      cv.id = id;

      this.cvsFacade.addToCvs(cv);
      this.cvNames = [
        ...this.cvNames,
        { name: `cv ${this.cvNames.length + 1}`, id: id },
      ];

      this.resetForm();
    } else {
      this.form.markAllAsTouched();
      markAllAsDirty(this.form);
    }
  }

  public selectCv(cvName: INameAndId): void {
    const [selectedCv] = this.cvs
      .filter(cv => cv.id === cvName.id)
      .map(cv => this.cvService.transformCvToCvForm(cv));

    console.log(selectedCv);

    this.form.patchValue({
      employeeForm: selectedCv.employeeForm,
      skills: selectedCv.skills,
      cvName: selectedCv.cvName,
      projectForms: selectedCv.projectForms.map(project =>
        this.projectForms.push(this.fb.control(project)),
      ),
      languageForms: selectedCv.languageForms.map(language =>
        this.languageForms.push(
          this.fb.group({ name: language.name, level: language.level }),
        ),
      ),
    });
  }

  private resetForm(): void {
    this.form.patchValue({
      employeeForm: {
        firstName: '',
        lastName: '',
        email: '',
        specialization: '',
        department: '',
      },
    });
    this.form.get('cvName').reset();
    this.form.get('skills').reset();

    this.projectForms.clear();
    this.languageForms.clear();

    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.form.updateValueAndValidity();

    this.cdRef.markForCheck();
  }
}
