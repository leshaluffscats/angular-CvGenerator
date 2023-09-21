import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { INameAndId } from 'src/app/shared/interfaces/projects.interface';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';

@UntilDestroy()
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() cvNames: INameAndId[];
  @Input() isValid: boolean;
  public cv: ICv;

  constructor(private cvFacade: CvsFacade) {}

  public selectCv(id: number): void {
    this.cvFacade.selectCv(id);
    this.cvFacade
      .getSelectedCv()
      .pipe(untilDestroyed(this))
      .subscribe((cv: ICv) => (this.cv = cv));
  }

  public deleteCv(id: number): void {
    this.cvFacade.deleteCv(id);
  }
}
