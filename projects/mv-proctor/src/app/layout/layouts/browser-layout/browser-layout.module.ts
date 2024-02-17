import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserLayoutComponent } from './browser-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BrowserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BrowserLayoutComponent]
})
export class BrowserLayoutModule { }
