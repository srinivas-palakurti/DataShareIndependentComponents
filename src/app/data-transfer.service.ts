import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private dataContent = new BehaviorSubject<string>('Testing Data transfer between Independent Components');
  public shareData = this.dataContent.asObservable();

  constructor() { }

  updateSharedDataText(text: string) {
    this.dataContent.next(text);
  }
}
