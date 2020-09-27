import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log(message: any): void {
    console.log(message);
  }

  warn(message: any): void {
    console.warn(message);
  }

  error(message: any): void {
    console.error(message);
  }
}
