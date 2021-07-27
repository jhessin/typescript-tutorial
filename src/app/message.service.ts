import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new Subject();

  sendMessage(msg: string): void {
    this.subject.next({
      text: msg,
    });
  }

  public get Message(): Observable<any> {
    return this.subject.asObservable();
  }
}
