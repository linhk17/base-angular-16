import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';



@NgModule({
  declarations: [
    InputSearchComponent,
    TablePaginatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxPaginationModule
  ],
  exports: [
    MaterialModule,
    NgxPaginationModule,
    InputSearchComponent,
    TablePaginatorComponent
  ]
})
export class SharedModule { }
