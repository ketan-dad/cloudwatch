import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<any>();
 
  sendData(message: number) {
      console.log("In sevice class.."+message)
      this.subject.next(message);
  }

  clearData() {
      this.subject.next();
  }

  getData(): Observable<any> {
    console.log("In sevice class,obsevable...."+this.subject.asObservable())
      return this.subject.asObservable();
  }
}
