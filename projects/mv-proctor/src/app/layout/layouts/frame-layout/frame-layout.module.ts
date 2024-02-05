import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrameLayoutComponent } from './frame-layout.component';

@NgModule({
    declarations: [FrameLayoutComponent],
    imports: [CommonModule, RouterModule],
    exports: [FrameLayoutComponent],
})
export class FrameLayoutModule {}
