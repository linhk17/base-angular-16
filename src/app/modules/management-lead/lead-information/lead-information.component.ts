import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { countryCode } from 'src/app/shared/utils/phone_code_country';
import {
  PhoneNumberValidator,
  dialCode,
  getCountryCodePhone,
  numberFormatNoCode,
} from 'src/app/shared/utils/validator';

export interface countryPhoneCode{
  name: string | number | any,
  dial_code: string,
  code: string,
}

@Component({
  selector: 'app-lead-information',
  templateUrl: './lead-information.component.html',
  styleUrls: ['./lead-information.component.scss'],
})
export class LeadInformationComponent {
  updated: Date | string = new Date();
  submitted: boolean = false;

  phoneCode: string = 'VN';
  phoneDialCode: string = '+84';
  countryCode: countryPhoneCode[] = [];
  formValidate: FormGroup;
  $loading: boolean = false;
  data = {
    id: 1,
    owner: 'User Name',
    state: 10,
    firstName: 'John',
    lastName: 'Wick',
    phoneNumber: '+61 411234567',
    email: 'test@gmail.com',
    loadAmount: 1000,
    time: 'ASAP',
    prefer: 'Midday',
  };

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.formValidate = this.fb.group({
      owner: ['', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          PhoneNumberValidator(
            this.data.phoneNumber
              ? getCountryCodePhone(this.data.phoneNumber).countryCode
              : this.phoneCode
          ),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      leadSource: [0, [Validators.required]],
      leadStatus: [0, [Validators.required]],
      firstName: ['', [Validators.required]],
      loadAmount: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      leadPurpose: [0, [Validators.required]],
      time: ['', [Validators.required]],
      prefer: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.countryCode = countryCode.sort(
      (a: countryPhoneCode, b: countryPhoneCode) => a.name - b.name);

    this.phoneDialCode =
      '+' + getCountryCodePhone(this.data.phoneNumber).dial_code;

    this.formValidate.patchValue({
      ...this.data,
      phoneNumber: getCountryCodePhone(this.data.phoneNumber).nationalNumber,
    });
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.formValidate.controls;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  setDiaCodeMenu(value: any){
    if(value){
      this.phoneDialCode = dialCode
    }
  }

  changeCountryCode(dial_code: any, code: any) {
    this.phoneCode = code;
    this.phoneDialCode = dial_code;
    this.formValidate.controls['phoneNumber'].setValidators(
      PhoneNumberValidator(this.phoneCode)
    );
    this.formValidate.controls['phoneNumber'].setValue(
      numberFormatNoCode
    );
  }
  onSubmit() {
    this.submitted = true;
    if(this.formValidate.valid){
      console.log(this.formValidate.value);
      
      new Promise((resolve, reject) => {
        this.$loading = true;
        resolve(this.$loading);
      }).then((res) => {
        setTimeout(() => {
          this.$loading = false;
          this.openSnackBar("Success", "Cancel")
          
        }, 1500);
      });
    }
  }
}

