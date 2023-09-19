import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INameAndId } from 'src/app/shared/interfaces/projects.interface';
import { CvsFacade } from 'src/app/store/cvs/cvs.facade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() cvNames: INameAndId[];
  @Input() isValid: boolean;

  constructor(private cvFacade: CvsFacade) {}

  public selectCv(id: number): void {
    this.cvFacade.selectCv(id);
  }
}
