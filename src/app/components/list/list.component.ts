import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Printer } from '../../interfaces/printer.interface';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Array<Printer> = [];
  @Output() deleteAction: EventEmitter<number> = new EventEmitter();
  @Output() downloadAction: EventEmitter<Object> = new EventEmitter();
  @Output() editAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  deleteItem(id): void {

    this.deleteAction.emit(id);

  }

  downloadFile(item: Printer): void {

    this.downloadAction.emit(item);

  }

  editItem(event, item: Printer) {

    this.editAction.emit([event, item]);

  }
}
