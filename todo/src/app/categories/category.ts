export class Category {
  id: number;
  name = '';

  construct(values: Object = {}) {
      Object.assign(this, values);
  }
}
