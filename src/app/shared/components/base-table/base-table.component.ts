import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IProject } from '../../interfaces/projects.interface';

interface IColumns {
  fieldValue: string;
  fieldCaption: string;
}

@Component({
  selector: 'app-base-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent {
  @Input() data: unknown[];
  @Input() columns: IColumns[];

  @Output() rowClicked = new EventEmitter<IProject>();

  public emitRowData(item: IProject): void {
    this.rowClicked.emit(item);
    // прокидывать не айди а весь объект
  }
}
