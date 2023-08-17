import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-real-info',
  templateUrl: './real-info.component.html',
  styleUrls: ['./real-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealInfoComponent {}
