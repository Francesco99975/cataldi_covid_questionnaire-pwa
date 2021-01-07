import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit, OnDestroy {

  questionnaireAccess: boolean = true;

  sub: Subscription;

  constructor(private timer: TimerService, private router: Router) { }

  ngOnInit(): void {
    this.timer.loadTimer();
    this.questionnaireAccess = !this.timer.completed;
    console.log("L:" + this.questionnaireAccess);
    this.sub = this.timer.change.subscribe(() => {
      this.questionnaireAccess = !this.questionnaireAccess;
      console.log("S:" + this.questionnaireAccess);
    });
  }

  async onStart() {
    await this.router.navigate(['/form']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
