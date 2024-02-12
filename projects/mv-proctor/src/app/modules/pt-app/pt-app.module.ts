import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtAppRoutingModule } from './pt-app-routing.module';
import { PtAppComponent } from './pt-app.component';


@NgModule({
  declarations: [
    PtAppComponent,
  ],
  imports: [
    CommonModule,
    PtAppRoutingModule
  ]
})
export class PtAppModule { }
