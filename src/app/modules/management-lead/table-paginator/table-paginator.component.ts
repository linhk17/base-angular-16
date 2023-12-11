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
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];

  constructor(private router: Router) {}
  ngOnInit() {}
  ngOnChange() {
    console.log(this.lengthData);

    this.count = this.lengthData;
  }
  navigate(id: string) {
    this.router.navigate(['/management-lead/information/', id]);
  }
}
