import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CovidForm } from './models/covid-form.model';

@Component({
  selector: 'app-covid-form-screen',
  templateUrl: './covid-form-screen.component.html',
  styleUrls: ['./covid-form-screen.component.scss']
})
export class CovidFormScreenComponent implements OnInit {

  covidForm: CovidForm;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl(""),
      lastName: new FormControl("", Validators.required),
      fever: new FormControl(false),
      breath: new FormControl(false),
      cough: new FormControl(false),
      throat: new FormControl(false),
      nose: new FormControl(false),
      taste: new FormControl(false),
      nausea: new FormControl(false),
      tiredness: new FormControl(false),
      travel: new FormControl(false),
      contact: new FormControl(false)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid) {
      let sym: Map<String, boolean> = new Map([
            ["fever", this.form.get("fever").value],
            ["breath", this.form.get("breath").value],
            ["cough", this.form.get("cough").value],
            ["throat", this.form.get("throat").value],
            ["nose", this.form.get("nose").value],
            ["taste", this.form.get("taste").value],
            ["nausea", this.form.get("nausea").value],
            ["tiredness", this.form.get("tiredness").value]
      ]);

      this.covidForm = new CovidForm(
          this.form.get("firstName").value, 
          this.form.get("middleName").value, 
          this.form.get("lastName").value,
          sym,
          this.form.get("travel").value,
          this.form.get("contact").value
      );

      console.log(this.covidForm.toJSON());
      console.log(this.covidForm.passed());
    }
  }

}
