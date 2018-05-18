import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { NavigationService } from '../../services/navigation.service';
import { Printer } from '../../interfaces/printer.interface';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-content-form-edit',
  templateUrl: './content-form-edit.component.html',
  styleUrls: ['./content-form-edit.component.css']
})
export class ContentFormEditComponent implements OnInit {
  statusList: Array<String> = [
    'Available',
    'Not available'
  ]
  submitText: string = 'Save'
  id: string;

  constructor(
    private _storageService: StorageService,
    private _activatedRoute: ActivatedRoute,
    private _navigationService: NavigationService) { }

  ngOnInit() {

    this.getItem();

  }

  ngOnChanges(changes: any) {

    this.getItem();

  }


  getItem(): void {

    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this._storageService.loadPrinterItem(this.id);
    });

  }

  navigateToList(event): void {

    this._navigationService.navigateToPrintersList(event);

  }

  submitUpdate(event, item: Printer): void {

    this._storageService.updatePrinterItem(this.id, item);
    this._navigationService.navigateToPrintersList(event);

  }
}
