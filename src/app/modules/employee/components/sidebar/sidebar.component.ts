import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { INameAndId } from 'src/app/shared/interfaces/projects.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() cvNames: INameAndId[];
  @Input() isValid: boolean;

  @Output() rowClicked = new EventEmitter<INameAndId>();

  public emitCvName(cvName: INameAndId): void {
    this.rowClicked.emit(cvName);
  }
}
