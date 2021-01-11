import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deferredPromt: any;

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(() => {
      this.updates.activateUpdate().then(() => document.location.reload());
    });

    // window.addEventListener('beforeinstallpromt', (e) => {
    //   e.preventDefault();
    //   console.log(e);
    //   this.deferredPromt = e;
    // });
  }

  // onInstall() {
  //   this.deferredPromt.prompt();
  //   this.deferredPromt.userChoice.then((result: any) => {
  //     if(result.outcome === 'accepted') {
  //       console.log("user installed app");
  //     }
  //     this.deferredPromt = null;
  //   });
  // }

  // onDismiss(backdrop: HTMLElement) {
  //   backdrop.style.display = 'none';
  // }
}
