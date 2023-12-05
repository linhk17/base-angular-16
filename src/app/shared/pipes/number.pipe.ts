import { formatNumber } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
@Pipe({
  name: 'numberPipe'
})
export class NumberPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string){}
  transform(value: number): string | number {
    return formatNumber(value, this.locale, '1.0-3' );
  }

}
