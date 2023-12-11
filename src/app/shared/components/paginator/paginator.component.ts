import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() page: any;
  @Input() tableSize: any;
  @Output() getData = new EventEmitter()
  onTableDataChange(event: any) {
    this.page = event;
    this.getData.emit(event);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData.emit(event);
  }
}
