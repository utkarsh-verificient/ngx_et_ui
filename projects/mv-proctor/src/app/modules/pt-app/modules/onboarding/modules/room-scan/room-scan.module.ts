import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomScanRoutingModule } from './room-scan-routing.module';
import { RoomScanComponent } from './room-scan.component';


@NgModule({
  declarations: [RoomScanComponent],
  imports: [
    CommonModule,
    RoomScanRoutingModule
  ]
})
export class RoomScanModule { }
