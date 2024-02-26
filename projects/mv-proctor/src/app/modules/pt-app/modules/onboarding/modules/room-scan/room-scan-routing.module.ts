import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomScanComponent } from './room-scan.component';

const routes: Routes = [
  {
    path: '',
    component: RoomScanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomScanRoutingModule { }
