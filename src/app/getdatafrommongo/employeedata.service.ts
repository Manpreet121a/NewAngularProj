import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EmployeeDataService {

  arraydata = new Array();

  public messageSource = new BehaviorSubject(this.arraydata);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeData(message: any) {
    this.messageSource.next(message)
  }

}