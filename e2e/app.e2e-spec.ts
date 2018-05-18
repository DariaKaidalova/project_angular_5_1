import { MainPage } from './app.po';
import { AddPrinterPage } from "./add-printer.po";

describe('project-app App', () => {
  let mainPage: MainPage;
  let addPrinterPage: AddPrinterPage;

  beforeEach(() => {
    mainPage = new MainPage();
    addPrinterPage = new AddPrinterPage();

    mainPage.navigateTo();
  });

  it('should display header text', () => {
    expect(mainPage.getHeaderText()).toEqual('Printers');
  });

  it('should add a printer', () => {
    const printerName = 'Canon Test';

    mainPage.getAddButton().click()
      .then(() => addPrinterPage.getNameField().sendKeys(printerName))
      .then(() => addPrinterPage.getStatusField().click())
      .then(() => addPrinterPage.getStatusAvailableOption().click())
      .then(() => addPrinterPage.getIpField().sendKeys('10.0.0.1'))
      .then(() => addPrinterPage.getColourField().sendKeys('Black'))
      .then(() => addPrinterPage.getTypeField().sendKeys('Laser'))
      .then(() => addPrinterPage.getSubmitButton().click())
      .then(() => {
        expect(mainPage.getLastPrinterName()).toEqual(printerName);
      });
  });

  it('should delete a printer', () => {
    let initialCount;

    mainPage.getPrintersCount()
      .then(count => {
        initialCount = count;
      })
      .then(() => mainPage.getLastDeleteButton().click())
      .then(() => mainPage.getPrintersCount())
      .then(count => {
        expect(count).toEqual(initialCount - 1)
      });
  });

  it('should validate name field', () => {
    mainPage.getAddButton().click()
      .then(() => addPrinterPage.getNameField().click())
      .then(() => addPrinterPage.getStatusField().click())
      .then(() => {
        expect(addPrinterPage.getNameErrorMessage()).toEqual('Name is required field');
        expect(addPrinterPage.getSubmitButton().isEnabled()).toEqual(false);
      });
  });
});
