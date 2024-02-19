import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatTooltipModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...MATERIAL_MODULES],
    exports: [...MATERIAL_MODULES],
})
export class MaterialModule {}
