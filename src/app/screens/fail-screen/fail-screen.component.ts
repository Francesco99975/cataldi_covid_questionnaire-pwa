import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail-screen',
  templateUrl: './fail-screen.component.html',
  styleUrls: ['./fail-screen.component.scss']
})
export class FailScreenComponent {

  constructor(private router: Router) { }


  onDone() {
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
}
