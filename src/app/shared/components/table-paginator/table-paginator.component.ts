import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent {
  @Input() data: any[] = [];
  @Input() column: any[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  // tableSizes: any = [3, 6, 9, 12];
ngOnInit(){
  console.log(this.data);
  
}
  onTableDataChange(event: any) {
    this.page = event;
    this.data = this.data
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.data = this.data
  }
}
