import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartScreenRoutingModule } from './start-screen-routing.module';
import { StartScreenComponent } from './start-screen.component';


@NgModule({
  declarations: [StartScreenComponent],
  imports: [
    CommonModule,
    StartScreenRoutingModule
  ]
})
export class StartScreenModule { }