import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceScanRoutingModule } from './face-scan-routing.module';
import { FaceScanComponent } from './face-scan.component';


@NgModule({
  declarations: [FaceScanComponent],
  imports: [
    CommonModule,
    FaceScanRoutingModule
  ]
})
export class FaceScanModule { }
