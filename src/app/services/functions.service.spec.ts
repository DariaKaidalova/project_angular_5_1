import { FunctionsService } from "./functions.service";
import { Printer } from "../interfaces/printer.interface";

describe('Functions Service', () => {
  const printer1: Printer = {
    id: '1',
    name: 'First',
    status: 'Active',
    ip: '10.0.0.1',
    description: '',
    colour: 'Black',
    type: 'Laser'
  };
  const printer2: Printer = {
    id: '2',
    name: 'Second',
    status: 'Active',
    ip: '10.0.0.2',
    description: '',
    colour: 'White',
    type: 'Matrix'
  };

  let subject: FunctionsService;

  beforeEach(() => {
    subject = new FunctionsService();
  });

  it('should delete printer', () => {
    const result = subject.delete('1', [printer1, printer2]);

    expect(result.length).toEqual(1);
    expect(result).toContain(printer2);
  });

  it('should not change list when id to delete is not found', () => {
    const result = subject.delete('3', [printer1, printer2]);

    expect(result.length).toEqual(2);
    expect(result).toContain(printer1, printer2);
  });

  it('should find item', () => {
    const result = subject.find('1', [printer1, printer2]);

    expect(result).toEqual(printer1);
  });

  it('should return undefined if item id does not exist', () => {
    const result = subject.find('3', [printer1, printer2]);

    expect(result).toBeUndefined();
  });

  it('should add item', () => {
    const result = subject.add(printer1, [printer2]);

    expect(result.length).toEqual(2);
    expect(result).toContain(printer1, printer2);
  });

  it('should not add item if name repeats', () => {
    const printer3 = { ...printer1, id: '3', ip: '10.0.0.3' };
    const result = subject.add(printer3, [printer1]);

    expect(result.length).toEqual(1);
    expect(result).toContain(printer1);
  });

  it('should replace spaces', () => {
    const str = 'string with spaces';
    const expectedStr = 'string_with_spaces';

    const result = subject.replaceSpaces(str);
    expect(result).toContain(expectedStr);
  });
});
