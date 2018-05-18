import { Injectable } from '@angular/core';
import { Printer } from '../interfaces/printer.interface';

@Injectable()
export class FunctionsService {
  
  constructor() {}

  delete(id: string, list: Array<Printer>): Array<Printer> {

    for(let i = 0; i < list.length; i++) {
      if(list[i].id === id) {
        list.splice(i, 1);
        break;
      }
    }
    return list
    
  }

  find(id: string, list: Array<Printer>): Printer {
    
    let item;
    for(let i = 0; i < list.length; i++) {
      if(list[i].id === id) {
        item = list[i];
        break;
      }
    }
    return item

  }

  update(item: Printer, list: Array<Printer>): Array<Printer> {

    for(let i = 0; i < list.length; i++) {
      if(list[i].id === item.id) {
        list[i] = item
      }
    }
    return list;

  }

  add(item: Printer, list: Array<Printer>): Array<Printer> {

    item.id = String(list.length);
    let isUsedName = this.сheckIdenticalNames(item.name, list);

    if(!isUsedName) {
      list.push(item);
    }
    else {
      console.log('Item was not added')
    }

    return list

  }


  сheckIdenticalNames(comparableName: string, list: Array<Printer>): Boolean {

    let isUsedName = false;

    for(let i = 0; i < list.length; i++) { 
      if(list[i].name === comparableName) {
        isUsedName = true; 
        break;
      }
      else isUsedName = false;
    }

    return isUsedName;


  }

  changeObject(item: Printer): string {

    let resultString = '', field = ''
    for (let key in item) {
      field = `${key}: ${item[key]}\r\n`;
      resultString += field;
    }
    return resultString
    
  }

  replaceSpaces(str: string): string {

    return str.replace(/ /g, '_');
    
  }

}
