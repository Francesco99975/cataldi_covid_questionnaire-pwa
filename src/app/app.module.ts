import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidFormScreenComponent } from './screens/covid-form-screen/covid-form-screen.component';
import { FailScreenComponent } from './screens/fail-screen/fail-screen.component';
import { SuccessScreenComponent } from './screens/success-screen/success-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidFormScreenComponent,
    FailScreenComponent,
    SuccessScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
