import { Injectable } from '@angular/core';
import {Product} from './../types/products';
import { products } from '../product-item';

@Injectable()
export class ProductService {

  constructor() { }

  getAll():Product[] {
    return products;
  }

  getCategoryItems(id:number): Product [] {
    return products.filter(item => item.categoryId == id );
  }

}