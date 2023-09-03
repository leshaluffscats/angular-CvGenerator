import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BaseInputClass } from '../../classes/base-input.class';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GetErrorMessagePipe } from '../../pipes/get-error-message/get-error-message.pipe';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    CommonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslateModule,
    GetErrorMessagePipe,
  ],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent extends BaseInputClass {
  @Input() placeholder: string;
}
