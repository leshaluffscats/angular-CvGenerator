import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-base-table2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-table2.component.html',
  styleUrls: ['./base-table2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTable2Component {}
