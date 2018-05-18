import { Injectable } from '@angular/core';
import { MockRestService } from './mock-rest.service';
import { FunctionsService } from './functions.service';
import { Printer } from '../interfaces/printer.interface';
import * as FileSaver from 'file-saver';

@Injectable()
export class StorageService {
  printersList: Array<Printer> = [];
  printerItem: Printer = {
    id: '',
    name: '',
    status: '',
    ip: '',
    description: '',
    colour: '',
    type: ''
  };

  constructor(
    private _mockRestService: MockRestService,
    private _functionsService: FunctionsService) {}

  loadPrintersList(): void {

    if(!this._mockRestService.getLocalStorageItems('printersList')) {
      this._mockRestService.getJSON().subscribe(
        items => {
          this.setList(items.printersList);
          this.getList();
        },
        err => { console.error(err); console.error('cannot GET data from the database'); }
      );
    }
    else {
      this.getList();
    }

  }

  loadPrinterItem(id): void {

    if(!this._mockRestService.getLocalStorageItems('printersList')) {
      this._mockRestService.getJSON().subscribe(
        items => {
          this.setList(items.printersList);
          this.getList();
          this.findItem(id, this.printersList);
        },
        err => { console.error(err); console.error('cannot GET data from the database'); }
      );
    }
    else {
      this.getList();
      this.findItem(id, this.printersList);
    }

  }

  deletePrinterItem(id: string): void {

    const newList = this._functionsService.delete(id, this.printersList);
    this._mockRestService.setLocalStorageItems('printersList', newList);

  }

  updatePrinterItem(id: string, item: Printer): void {

    const newList = this._functionsService.update(item, this.printersList);
    this.setList(newList);
    this.getList();
    this.findItem(id, this.printersList);

  }

  addPrinterItem(item: Printer): void {

    const newList = this._functionsService.add(item, this.printersList);
    this.setList(newList);
    this.getList();

  }

  downloadPrinterItem(item: Printer): void {

    const fileFields = this._functionsService.changeObject(item);
    const fileContent = new Blob([fileFields], {type: 'text/plain;charset=utf-8'});
    const fileName = this._functionsService.replaceSpaces(`printer_id${item.id}_${item.name}`);
    FileSaver.saveAs(fileContent, `${fileName}.txt`);
    
  }

  // common actions
  private setList(list: Array<Printer>): void {

    this._mockRestService.setLocalStorageItems('printersList', list);

  }

  private getList(): void {

    this.printersList = this._mockRestService.getLocalStorageItems('printersList');

  }

  private findItem(id: string, list: Array<Printer>): void {

    this.printerItem = this._functionsService.find(id, list);

  }
}
