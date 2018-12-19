export class Category {
  id: number;
  name = '';

  construct(id:number, name:string){
    this.id = id;
    this.name = name;
  }
}
