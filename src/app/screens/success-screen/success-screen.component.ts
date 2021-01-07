import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent {

  constructor(private router: Router) { }

  onDone() {
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
}

