import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private message: MessageService) {}

  public showError(error: string) {
    this.message.add({ severity: 'error', detail: error });
  }
  public showSuccessMessage(message: string) {
    this.message.add({ severity: 'success', detail: message });
  }
}
