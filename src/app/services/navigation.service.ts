import { Injectable } from '@angular/core';
import { Printer } from '../interfaces/printer.interface';
import { FunctionsService } from './functions.service';
import { Router } from '@angular/router'

@Injectable()
export class NavigationService {

  constructor(    
  	private _functionsService: FunctionsService,
    private _router: Router) {}

	navigateToPrintersList(event): void {

    event.preventDefault();
    this._router.navigate(['/printers']);

  }

  navigateToPrinterItemAdd(event) {

    event.preventDefault();
    this._router.navigate(['/printers/add']);

  }

  navigateToPrinterItemEdit(event, item: Printer): void {

    event.preventDefault();
    this._router.navigate(['/printers/update', item.id, this._functionsService.replaceSpaces(item.name)]);

  }

}
