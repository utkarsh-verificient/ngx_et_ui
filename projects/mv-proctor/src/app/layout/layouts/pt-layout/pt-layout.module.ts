import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PtLayoutComponent } from './pt-layout.component';
import { SharedModule } from '../../shared';

@NgModule({
    declarations: [PtLayoutComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [PtLayoutComponent],
})
export class PtLayoutModule {}
