import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"

import { CovidFormScreenComponent } from "./covid-form-screen.component";
import { CovidFormRoutingModule } from "./covid-form-screen-routing.module";


@NgModule({
  declarations: [CovidFormScreenComponent],
  imports: [
    CommonModule,
    CovidFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class CovidFormScreenModule { }