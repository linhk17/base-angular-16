import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeFormat'
})
export class DatetimePipe implements PipeTransform {

  transform(value: string | null) {
    var datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'd/M/YYYY hh:mm a');
    return value;
  }

}
