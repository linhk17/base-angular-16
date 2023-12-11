import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { LeadService } from 'src/app/services/lead.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface dataTable {
  id: string;
  username: string;
  email: number;
  state: number;
  status: number;
  phoneNumber: string;
  leadSource: string;
}


@Component({
  selector: 'app-management-lead',
  templateUrl: './management-lead.component.html',
  styleUrls: ['./management-lead.component.scss'],
})
export class ManagementLeadComponent {
  subcription: Subscription = new Subscription();
  selected: string = 'all';
  dataSource: dataTable[] = [];
  dataDisplay: dataTable[] = [];
  column: string[] = [
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
  loading$ = this.loader.loading$;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    public loader: LoadingService
  ) {
    this.formFilter = this.fb.group({
      filer: [''],
      search: [''],
    });
  }
  ngOnInit() {
    this.subcription.add(
      this.leadService.getAll().subscribe((res) => (this.dataSource = res))
    );
    this.getDataPaginator(1, 10);
  }

  getDataPaginator(page: number, limit: number) {
    console.log(page);
    
    this.subcription.add(
      this.leadService.getByPaginator(page, limit).subscribe((res) => {
        this.dataDisplay = res;
      })
    );
  }

  setDataDisplay(event: any) {
    this.dataDisplay =
      event.value != 'all'
        ? this.dataSource.filter((item) => item.status == event.value)
        : this.dataSource;
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
