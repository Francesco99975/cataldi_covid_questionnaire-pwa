import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  questionnaireAccess: boolean = true;

  constructor(private timer: TimerService, private router: Router) { }

  ngOnInit(): void {
    this.timer.loadTimer();
    this.questionnaireAccess = !this.timer.completed;
    this.timer.change.subscribe(() => {
      this.questionnaireAccess = !this.questionnaireAccess;
    });
  }

  async onStart() {
    // let ed = new Date();
    // ed.setSeconds(ed.getSeconds() + 20);

    // this.timer.setTimer(true, ed);
    await this.router.navigate(['/form']);
  }

}
