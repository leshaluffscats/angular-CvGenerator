import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { BaseInputClass } from '../../classes/base-input.class';
import { GetErrorMessagePipe } from '../../pipes/get-error-message/get-error-message.pipe';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    MessageModule,
    GetErrorMessagePipe,
    TranslateModule,
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseInputClass {
  @Input() placeholder: string;
}
