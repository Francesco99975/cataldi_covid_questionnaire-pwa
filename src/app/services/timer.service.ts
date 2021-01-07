import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  EXPIRY_KEY: string = 'expiry';
  STATUS_KEY: string = 'status';

  expiryDate: Date;
  completed: boolean = false;
  timer: any;
  change: Subject<void> = new Subject();

  loadTimer() {
    try {
      this.completed = localStorage.getItem(this.STATUS_KEY) === "1" ? true : false;
      this.expiryDate = localStorage.getItem(this.EXPIRY_KEY) != '' ?  new Date(localStorage.getItem(this.EXPIRY_KEY)) : null;
      if (this.expiryDate != null) this.autoWatcher();
    } catch (error) {
      console.log(error.message);
    }
  }

  setTimer(completed: boolean, expiryDate: Date) {
    this.completed = completed;
    this.expiryDate = expiryDate;
    localStorage.setItem(this.EXPIRY_KEY, this.expiryDate.toISOString());
    localStorage.setItem(this.STATUS_KEY, this.completed ? "1" : "0");
    this.autoWatcher();
    this.change.next();
  }

  private autoWatcher() {
    if(this.timer) clearTimeout(this.timer);
    const time = this.expiryDate.getTime() - new Date().getTime();
    this.timer = setTimeout(() => {
      this.completed = false;
      localStorage.setItem(this.STATUS_KEY, "0");
      localStorage.setItem(this.EXPIRY_KEY, '');
      this.change.next();
    }, time);
  }
}
