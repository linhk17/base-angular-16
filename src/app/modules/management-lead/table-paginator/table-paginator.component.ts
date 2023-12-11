import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dataTable } from 'src/app/modules/management-lead/management-lead.component';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent {
  @Input() data: dataTable[] = [];
  @Input() column: string[] = [];
  @Input() lengthData: number = 0;
  @Input() loading$: any;
  @Output() getData = new EventEmitter();
  page: any = 1;
  count: number = 0;
  tableSize: number = 10;

  constructor(private router: Router) {}
  ngOnInit() {}
  ngOnChange() {
    this.count = this.lengthData;
  }
  navigate(id: string) {
    this.router.navigate(['/management-lead/information/', id]);
  }
  setPage(event: any){
    this.page = event;
  }
}
