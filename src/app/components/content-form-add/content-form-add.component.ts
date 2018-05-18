import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { NavigationService } from '../../services/navigation.service';
import { Printer } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form-add.component.html',
  styleUrls: ['./content-form-add.component.css']
})

export class ContentFormAddComponent implements OnInit {
  statusList: Array<String> = [
    'Available',
    'Not available'
  ]
  submitText: string = 'Add'

  constructor(
    private _storageService: StorageService,
    private _navigationService: NavigationService) { }

  ngOnInit() {

    this._storageService.loadPrintersList();
    
  }

  ngOnChanges(changes: any) {

    this._storageService.loadPrintersList();
    
  }

  navigateToList(event): void {

    this._navigationService.navigateToPrintersList(event);

  }

  submitAdd(event, item: Printer): void {

    this._storageService.addPrinterItem(item);
    this._navigationService.navigateToPrintersList(event);

  }

}
