import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-virtual-cv',
  templateUrl: './virtual-cv.component.html',
  styleUrls: ['./virtual-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualCvComponent {}
