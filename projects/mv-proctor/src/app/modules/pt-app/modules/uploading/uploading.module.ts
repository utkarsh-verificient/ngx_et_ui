import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadingRoutingModule } from './uploading-routing.module';
import { UploadingComponent } from './uploading.component';


@NgModule({
  declarations: [UploadingComponent],
  imports: [
    CommonModule,
    UploadingRoutingModule
  ]
})
export class UploadingModule { }
