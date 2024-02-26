import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdScanComponent } from './id-scan.component';

const routes: Routes = [
  {
    path: '',
    component: IdScanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdScanRoutingModule { }
