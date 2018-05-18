import { browser, by, element } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.className('b-header')).getText();
  }

  getAddButton() {
    return element(by.id('addButton'));
  }

  getPrintersCount() {
    return element.all(by.css('.b-table__row')).count();
  }

  getLastPrinterName() {
    return element.all(by.css('.b-table__row'))
      .last()
      .all(by.css('.b-table__item'))
      .first()
      .getText();
  }

  getLastDeleteButton() {
    return element.all(by.className('fa-trash')).last();
  }
}
