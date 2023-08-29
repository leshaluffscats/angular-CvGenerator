import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private message: MessageService) {}

  public showError(error: string) {
    this.message.add({ severity: 'error', detail: error });
  }
}
