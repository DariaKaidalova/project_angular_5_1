import { by, element } from 'protractor';

export class AddPrinterPage {
  getNameField() {
    return element(by.id('itemName'));
  }

  getStatusField() {
    return element(by.id('itemStatus'));
  }

  getStatusAvailableOption() {
    return element(by.css('option[value="0: Available"]'));
  }

  getIpField() {
    return element(by.id('itemIp'));
  }

  getColourField() {
    return element(by.id('itemColour'));
  }

  getTypeField() {
    return element(by.id('itemType'));
  }

  getSubmitButton() {
    return element(by.id('submitButton'));
  }

  getNameErrorMessage() {
    return element(by.id('nameErrorMessage')).getText();
  }
}
