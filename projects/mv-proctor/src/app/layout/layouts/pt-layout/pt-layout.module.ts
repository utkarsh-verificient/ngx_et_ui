import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PtLayoutComponent } from './pt-layout.component';

@NgModule({
    declarations: [PtLayoutComponent],
    imports: [CommonModule, RouterModule],
    exports: [PtLayoutComponent],
})
export class PtLayoutModule {}
