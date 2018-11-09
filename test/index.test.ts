import * as Parse from 'parse/node';
import ParsePointerEncoder from '../src/ParsePointerEncoder';

ParsePointerEncoder.setParse(Parse);

describe('encode()', () => {
  test('Given a Parse Object and no separator: should encode an object correctly', () => {
    const obj = new Parse.Object('Test');
    obj.id = '123';

    const expected = `${obj.className}:${obj.id}`;
    const actual = ParsePointerEncoder.encode(obj);

    expect(actual).toEqual(expected);
  });

  test('Given a Parse Object and a custom separator: should encode an object correctly', () => {
    const obj = new Parse.Object('Test');
    obj.id = '123';

    const expected = `${obj.className}$${obj.id}`;
    const actual = ParsePointerEncoder.encode(obj, '$');

    expect(actual).toEqual(expected);
  });
});

describe('decode()', () => {
  test('Given a pointer string and no separator: should decode an object correctly', () => {
    const pointer = 'MyClass:838';

    const obj = new Parse.Object('MyClass');
    obj.id = '838';

    const actual = ParsePointerEncoder.decode(pointer);

    expect(actual.toJSON()).toEqual(obj.toJSON());
  });

  test('Given a pointer string and a custom separator: should decode an object correctly', () => {
    const pointer = 'MyClass!838';

    const obj = new Parse.Object('MyClass');
    obj.id = '838';

    const actual = ParsePointerEncoder.decode(pointer, '!');

    expect(actual.toJSON()).toEqual(obj.toJSON());
  });

  test('Given a wrong pointer string: should throw', () => {
    const pointer = 'MyClass2838';

    expect(() => {
      ParsePointerEncoder.decode(pointer, '$');
    }).toThrow('pointer string is not valid');
  });
});
