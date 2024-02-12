import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtBrowserRoutingModule } from './pt-browser-routing.module';
import { PtBrowserComponent } from './pt-browser.component';


@NgModule({
  declarations: [PtBrowserComponent],
  imports: [
    CommonModule,
    PtBrowserRoutingModule
  ]
})
export class PtBrowserModule { }
