import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { BaseInputClass } from '../../classes/base-input.class';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, ChipsModule, ReactiveFormsModule],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent extends BaseInputClass {
  @Input() placeholder: string;
}
