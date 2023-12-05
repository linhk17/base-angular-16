import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-management-lead',
  templateUrl: './management-lead.component.html',
  styleUrls: ['./management-lead.component.scss'],
})
export class ManagementLeadComponent {
  selected: string = 'all';
  dataSource: any[] = [];
  dataDisplay: any[] = [];
  column: any[] = [
    'Lead ID',
    'Borrower',
    'Phone Number',
    'Email',
    'State',
    'Lead Source',
    'Status',
    'Action',
  ];
  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService) {
    this.formFilter = this.fb.group({
      filer: [''],
      search: [''],
    });
  }
  ngOnInit() {
    this.leadService.getAll()
    .subscribe(res => this.dataSource = res)

    this.getDataPaginator(1, 10)
  }

  getDataPaginator(page: number, limit: number){
    this.leadService.getByPaginator(page, limit)
    .subscribe(res => {
      this.dataDisplay = res
    } )
  }

  setDataDisplay(event: any) {
    this.dataDisplay = event.value != 'all' ? this.dataSource.filter((item) => item.status == event.value)
    : this.dataSource
  }
}
