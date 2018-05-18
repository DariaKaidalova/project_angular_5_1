import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { NavigationService } from '../../services/navigation.service';
import { Printer } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})

export class ContentListComponent implements OnInit {

  constructor(
    private _storageService: StorageService,
    private _navigationService: NavigationService) { }

  ngOnInit() {

    this._storageService.loadPrintersList();

  }

  ngOnChanges(changes: any) {

    this._storageService.loadPrintersList();
    
  }

  deleteItem(id: string): void {

    this._storageService.deletePrinterItem(id);

  }

  downloadItem(item: Printer): void {

    this._storageService.downloadPrinterItem(item);
    
  }

  navigateToAddItem(event): void {

    this._navigationService.navigateToPrinterItemAdd(event)

  }

  navigateToEditItem(event, item: Printer): void {

    this._navigationService.navigateToPrinterItemEdit(event, item);

  }
}
