import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';
import { dateFormatPipe } from './pipes/date.pipe';
import { CurrencyFormatPipe } from './pipes/currency.pipe';
import { NumberPipe } from './pipes/number.pipe';



@NgModule({
  declarations: [
    InputSearchComponent,
    TablePaginatorComponent,
    dateFormatPipe,
    CurrencyFormatPipe,
    NumberPipe
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
    TablePaginatorComponent,
    dateFormatPipe,
    CurrencyFormatPipe,
    NumberPipe

  ]
})
export class SharedModule { }
