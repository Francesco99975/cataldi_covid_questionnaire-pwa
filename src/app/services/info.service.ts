import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  firstName: string;
  middleName: string;
  lastName: string;

  constructor() { }

  loadInfo() {
    this.firstName = localStorage.getItem('first-name') || "";
    this.middleName = localStorage.getItem('middle-name') || "";
    this.lastName = localStorage.getItem('last-name') || "";
  }

  setInfo(fn: string, mn: string, ln: string) {
    this.firstName = fn;
    this.middleName = mn;
    this.lastName = ln;
    localStorage.setItem('first-name', fn);
    localStorage.setItem('middle-name', mn);
    localStorage.setItem('last-name', ln);
  }
}
