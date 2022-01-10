export class GenericMethods {
  convertValue(typeName: string, value: string): any {
    type Convert<T> = T extends 'number'
      ? number
      : T extends 'boolean'
      ? boolean
      : T extends 'string'
      ? string
      : T extends 'date'
      ? Date
      : never;

    type myType = Convert<typeof typeName>;
    return typeName == 'date' ? new Date(value) : (value as myType);
  }
}
