import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtHeaderComponent } from './components';
import { MaterialModule } from './material.module';

const COMPONENTS = [PtHeaderComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
