import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      name: "Banane",
      price: 1500,
    },
    {
      name: "Igname",
      price: 645,
    }
  ];

  constructor() { }

  getListUsers() {
      return this.products;
  }
}

export class Product {
  name?: string;
  price?: number;
}
