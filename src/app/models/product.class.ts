export class Product {
  public id: number = 0; 
  public name: string = '';
  public price: number = 0;
  public status: boolean = false;

  constructor(
    id: number,
    name: string, price: number, status: boolean
  ){
    this.id = id;
    this.name = name;
    this.price = price;
    this.status = status;
  }
}