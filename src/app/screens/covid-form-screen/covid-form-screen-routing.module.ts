import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidFormScreenComponent } from './covid-form-screen.component';

const routes: Routes = [{ path: '', component: CovidFormScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidFormRoutingModule { }