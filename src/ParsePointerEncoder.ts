export default class ParsePointerEncoder {
  public static PARSE;

  /**
   * Sets Parse to the class
   * @param PARSE
   */
  public static setParse(PARSE: any) {
    ParsePointerEncoder.PARSE = PARSE;
  }

  /**
   * Encodes a parse object to a pointer string
   * @param obj
   * @param separator
   * @example
   * const obj = new Parse.Object('MyClass');
   * obj.id = '383'
   *
   * encode(obj, ':'); // "MyClass:383"
   */
  public static encode(obj: Parse.Object, separator: string = ':'): string {
    return `${obj.className}${separator}${obj.id}`;
  }

  /**
   * Decodes a pointer string to a Parse Object
   * @param str
   * @param separator
   * const obj = ParsePointerEncoder.decode("MyClass:383");
   * obj.id; // "383"
   * obj.className; // MyClass
   */
  public static decode(str: string, separator: string = ':'): Parse.Object {
    ParsePointerEncoder.assertValid(str, separator);
    const parts = str.split(separator);
    const obj =  new ParsePointerEncoder.PARSE.Object(parts[0]);
    obj.id = parts[1];
    return obj;
  }

  /**
   * Validates if a pointer string is valid
   * @param str
   * @param separator
   */
  public static isValid(str: string, separator: string = ':'): boolean {
    const parts = str.split(separator);

    return parts.length === 2 &&
      typeof parts[0] === 'string' &&
      typeof parts[1] === 'string';
  }

  /**
   * Throws an error if the given string is not valid
   * @param str
   * @param separator
   */
  public static assertValid(str: string, separator: string = ':') {
    if (!ParsePointerEncoder.isValid(str, separator)) {
      throw new Error('pointer string is not valid');
    }
  }
}
