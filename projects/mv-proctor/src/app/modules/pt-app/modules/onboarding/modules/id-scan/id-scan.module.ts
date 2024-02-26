import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdScanRoutingModule } from './id-scan-routing.module';
import { IdScanComponent } from './id-scan.component';


@NgModule({
  declarations: [IdScanComponent],
  imports: [
    CommonModule,
    IdScanRoutingModule
  ]
})
export class IdScanModule { }
