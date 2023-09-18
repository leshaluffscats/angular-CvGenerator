import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { IProject } from '../../interfaces/projects.interface';
import { ToDatePipe } from '../../pipes/to-date/to-date.pipe';

interface IColumns {
  fieldValue: string;
  fieldCaption: string;
}

@Component({
  selector: 'app-base-table',
  standalone: true,
  imports: [CommonModule, TableModule, ToDatePipe],
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent {
  @Input() data: unknown[];
  @Input() columns: IColumns[];

  @Output() rowClicked = new EventEmitter();

  public emitRowData(item: IProject): void {
    this.rowClicked.emit(item);
  }
}
