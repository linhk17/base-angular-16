import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() page: any;
  @Input() tableSize: any;
  @Input() pageCurrent = new EventEmitter();
  @Output() getData = new EventEmitter()
  onTableDataChange(event: any) {
    this.getData.emit(event);
  }
}
