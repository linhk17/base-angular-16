import { AbstractControl, ValidatorFn } from "@angular/forms";
import {parsePhoneNumber, isValidPhoneNumber} from 'libphonenumber-js'

export let numberFormat: string = '';
export let numberFormatNoCode: string = '';
export function PhoneNumberValidator(regionCode: any): ValidatorFn {
  let phoneNumber: any;
  return (control: AbstractControl) => {
    let validNumber = false;
    try {
      phoneNumber = parsePhoneNumber(control.value, regionCode);
      numberFormat = `(+${phoneNumber.countryCallingCode})` + phoneNumber.nationalNumber;
      numberFormatNoCode = phoneNumber.nationalNumber;
      validNumber = isValidPhoneNumber(control.value, regionCode)
    } catch (e) { }

    return validNumber ? null : { 'wrongNumber': { value: control.value } };
  }
}

export function getCountryCodePhone(phone: any): any {
  let countryCode: any = parsePhoneNumber(phone).country;
  let dial_code: any = parsePhoneNumber(phone).countryCallingCode;
  return {
    countryCode: countryCode,
    dial_code: dial_code
  }
}




