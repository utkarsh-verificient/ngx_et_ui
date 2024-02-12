import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import {
  BrowserLayoutModule,
  EmptyLayoutModule,
  FrameLayoutModule,
  PtLayoutModule,
  TaLayoutModule,
} from './layouts';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    EmptyLayoutModule,
    FrameLayoutModule,
    PtLayoutModule,
    TaLayoutModule,
    BrowserLayoutModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
