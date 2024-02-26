import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceScanComponent } from './face-scan.component';

const routes: Routes = [
  {
    path: '',
    component: FaceScanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceScanRoutingModule { }
