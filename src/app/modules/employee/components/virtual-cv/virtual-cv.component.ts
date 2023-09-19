import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
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
import {
  ICv,
  ILanguage,
  IVirtualCvForm,
} from 'src/app/shared/interfaces/cv.interface';
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
export class VirtualCvComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public projects: IProject[];
  public selectProject: FormControl;
  public cvNames: INameAndId[] = [];

  private cvs: ICv[];
  private selectedCv: IVirtualCvForm;

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
      .subscribe((cvs: ICv[]) => {
        this.cvs = cvs;
        this.cvNames = this.cvs.map(cv => ({ name: cv.cvName, id: cv.id }));
        this.cdRef.markForCheck();
      });

    this.cvsFacade
      .getSelectedCv()
      .pipe(untilDestroyed(this))
      .subscribe(([cv]) => {
        this.resetForm();
        this.selectedCv = this.cvService.transformCvToCvForm(cv);
        this.setEmployeeFormValue(this.selectedCv);
        this.setLanguages(this.selectedCv.languageForms);
        this.setProjects(this.selectedCv.projectForms);
      });
  }

  public ngOnDestroy(): void {
    this.cvsFacade.resetCvs();
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
      const id = Date.now();
      const cv = this.form.getRawValue();
      cv.id = id;
      cv.isNew = true;

      this.cvsFacade.addToCvs(cv);

      this.resetForm();
    } else {
      this.form.markAllAsTouched();
      markAllAsDirty(this.form);
    }
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

    this.clearFormArrays();

    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.form.updateValueAndValidity();

    this.cdRef.markForCheck();
  }

  private clearFormArrays(): void {
    this.projectForms.clear();
    this.languageForms.clear();
  }

  private setEmployeeFormValue(cv: IVirtualCvForm): void {
    this.form.patchValue({
      employeeForm: cv.employeeForm,
      skills: cv.skills,
      cvName: cv.cvName,
    });
  }

  private setLanguages(languages: ILanguage[]): void {
    languages.forEach(language =>
      this.languageForms.push(
        this.fb.group({
          name: language.name,
          level: language.level,
        }),
      ),
    );
  }

  private setProjects(projects: IProject[]): void {
    projects.forEach(project =>
      this.projectForms.push(
        this.fb.control({
          projectName: project.projectName,
          startDate: project.startDate,
          endDate: project.endDate,
          teamSize: project.teamSize,
          techStack: project.techStack,
          description: project.description,
          responsibilities: project.responsibilities,
          teamRoles: project.teamRoles,
        }),
      ),
    );
  }
}
