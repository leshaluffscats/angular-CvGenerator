import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

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
}
