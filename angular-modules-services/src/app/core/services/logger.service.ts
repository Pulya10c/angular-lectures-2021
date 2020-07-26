import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public log(...args) {
    console.log(...args);
  }

  public info(...args) {
    console.info(...args);
  }

  public error(...args) {
    console.error(...args);
  }
}
