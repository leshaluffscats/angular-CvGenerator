import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() cvs: { id: number }[] = [];

  public deleteRow(id: string | number): void {
    this.cvs = this.cvs.filter(cv => cv.id !== id);
  }
}
