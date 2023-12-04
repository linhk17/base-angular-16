import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { InputSearchComponent } from './components/input-search/input-search.component';



@NgModule({
  declarations: [
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    InputSearchComponent
  ]
})
export class SharedModule { }
