import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { BaseInputClass } from '../../classes/base-input.class';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GetErrorMessagePipe } from '../../pipes/get-error-message/get-error-message.pipe';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    CommonModule,
    ChipsModule,
    ReactiveFormsModule,
    TranslateModule,
    GetErrorMessagePipe,
  ],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent extends BaseInputClass {
  @Input() placeholder: string;
}
