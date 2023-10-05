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
import { IColumn } from '../../interfaces/columns.interface';

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
  @Input() columns: IColumn[];

  @Output() rowClicked = new EventEmitter();

  public emitRowData(item: IProject): void {
    this.rowClicked.emit(item);
  }
}
