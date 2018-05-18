import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; // Import RxJs required methods: map and catch
import 'rxjs/add/operator/catch';
import { Printer } from '../interfaces/printer.interface';

@Injectable()
export class MockRestService {
  private _urlDB = '/assets/db.json'

  constructor (private _http: HttpClient) {}

  getJSON(): Observable<any> {

    return this._http.get(this._urlDB)
      .map((result: any) => { return result })
        .catch((error:any) => Observable.throw(error.error || 'Load json error'));

  }

  setLocalStorageItems (itemsTitle: string, items: Array<Printer>): void {

    localStorage.removeItem(itemsTitle);
    localStorage.setItem(itemsTitle, this.stringifyObject(items));

  }

  getLocalStorageItems (itemsTitle: string): any {

    return this.parseString(localStorage.getItem(itemsTitle))

  }

  // common functions
  private stringifyObject (object: Object): string {

    return JSON.stringify(object)

  }

  private parseString (str: string): any {

    return JSON.parse(str)

  }

}
