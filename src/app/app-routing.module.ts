import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: "", 
    loadChildren: () => import('./screens/start-screen/start-screen.module').then(m => m.StartScreenModule) 
  },
  {
    path: "form",
    loadChildren: () => import('./screens/covid-form-screen/covid-form-screen.module').then(m => m.CovidFormScreenModule)
  },
  {
    path: "fail",
    loadChildren: () => import('./screens/fail-screen/fail-screen.module').then(m => m.FailScreenModule)
  },
  {
    path: "success",
    loadChildren: () => import('./screens/success-screen/success-screen.module').then(m => m.SuccessScreenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
