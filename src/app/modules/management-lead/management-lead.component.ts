import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';
import { LeadService } from 'src/app/services/lead.service';
import { LoadingService } from 'src/app/services/loading.service';

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
  loading$ = this.loader.loading$;
  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    public loader: LoadingService) {
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
    .pipe(finalize(() => this.leadService.isLoading(true)))
    .subscribe(res => {
      console.log(this.loading$);
      
      this.dataDisplay = res;
    } )
  }

  setDataDisplay(event: any) {
    this.dataDisplay = event.value != 'all' ? this.dataSource.filter((item) => item.status == event.value)
    : this.dataSource
  }
}
