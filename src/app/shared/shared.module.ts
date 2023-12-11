import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { dateFormatPipe } from './pipes/date.pipe';
import { CurrencyFormatPipe } from './pipes/currency.pipe';
import { NumberPipe } from './pipes/number.pipe';
import { DatetimePipe } from './pipes/datetime.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
    InputSearchComponent,
    dateFormatPipe,
    CurrencyFormatPipe,
    NumberPipe,
    DatetimePipe,
    PaginatorComponent
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
    dateFormatPipe,
    CurrencyFormatPipe,
    NumberPipe,
    DatetimePipe

  ]
})
export class SharedModule { }
