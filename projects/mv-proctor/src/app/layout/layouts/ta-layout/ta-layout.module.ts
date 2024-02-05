import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaLayoutComponent } from './ta-layout.component';

@NgModule({
    declarations: [TaLayoutComponent],
    imports: [CommonModule, RouterModule],
    exports: [TaLayoutComponent],
})
export class TaLayoutModule {}
