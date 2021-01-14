import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';
import { TimerService } from 'src/app/services/timer.service';
import { CovidForm } from './models/covid-form.model';

@Component({
  selector: 'app-covid-form-screen',
  templateUrl: './covid-form-screen.component.html',
  styleUrls: ['./covid-form-screen.component.scss']
})
export class CovidFormScreenComponent implements OnInit {

  covidForm: CovidForm;
  form: FormGroup;
  loading: boolean;
  error: boolean;
  formError: boolean;
  errorMsg: string;

  constructor(private router: Router, private http: HttpClient, private timer: TimerService, private info: InfoService) {
    
  }

  ngOnInit(): void {
    this.info.loadInfo();
    this.error = false;
    this.formError = false;
    this.loading = false;
    this.form = new FormGroup({
      firstName: new FormControl(this.info.firstName, Validators.required),
      middleName: new FormControl(this.info.middleName),
      lastName: new FormControl(this.info.lastName, Validators.required),
      fever: new FormControl('', Validators.required),
      breath: new FormControl('', Validators.required),
      cough: new FormControl('', Validators.required),
      throat: new FormControl('', Validators.required),
      nose: new FormControl('', Validators.required),
      taste: new FormControl('', Validators.required),
      nausea: new FormControl('', Validators.required),
      tiredness: new FormControl('', Validators.required),
      travel: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(this.form.valid) {
      let sym: Map<String, boolean> = new Map([
            ["fever", this.form.get("fever").value === 'y' ? true : false],
            ["breath", this.form.get("breath").value === 'y' ? true : false],
            ["cough", this.form.get("cough").value === 'y' ? true : false],
            ["throat", this.form.get("throat").value === 'y' ? true : false],
            ["nose", this.form.get("nose").value === 'y' ? true : false],
            ["taste", this.form.get("taste").value === 'y' ? true : false],
            ["nausea", this.form.get("nausea").value === 'y' ? true : false],
            ["tiredness", this.form.get("tiredness").value === 'y' ? true : false]
      ]);

      this.covidForm = new CovidForm(
          this.form.get("firstName").value, 
          this.form.get("middleName").value, 
          this.form.get("lastName").value,
          sym,
          this.form.get("travel").value === 'y' ? true : false,
          this.form.get("contact").value === 'y' ? true : false
      );

      let fn:string = this.covidForm.firstName.trim();
      let mn:string = this.covidForm.middleName.trim();
      let ln:string = this.covidForm.lastName.trim();
      console.log(fn);

      this.info.setInfo(fn, mn, ln);

      this.loading = true;
      //https://ink-jazzy-cupboard.glitch.me/ccq/mail-dev
      //http://localhost:3000/ccq/mail-dev
      this.http.post("https://ink-jazzy-cupboard.glitch.me/ccq/mail", this.covidForm.toJSON()).subscribe((response) => {
        console.log(response);

        let ed = new Date();
        ed.setHours(ed.getHours() + (24 - ed.getHours()));
        ed.setMinutes(0);
        ed.setSeconds(0);

        this.timer.setTimer(true, ed);

        if(this.covidForm.passed()) {
          this.router.navigateByUrl('/success', {replaceUrl: true});
        } else {
          this.router.navigateByUrl('/fail', {replaceUrl: true});
        }
      }, (err) => {
        this.loading = false;
        this.error = true;
        console.log(err);
        this.errorMsg = "Email could not be sent to your employer! Please let them know your result, click dismiss to view it.";
      });    
    } else {
      this.formError = true;
      console.log(this.form.get('fever').errors);
    }
  }

  onDismissed() {
    let ed = new Date();
    ed.setHours(ed.getHours() + (24 - ed.getHours()));
    ed.setMinutes(0);
    ed.setSeconds(0);

    this.timer.setTimer(true, ed);

    if(this.covidForm.passed()) {
      this.router.navigateByUrl('/success', {replaceUrl: true});
    } else {
      this.router.navigateByUrl('/fail', {replaceUrl: true});
    }
  }

}
