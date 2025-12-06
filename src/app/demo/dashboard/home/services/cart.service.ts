import { Injectable } from '@angular/core';
import { Product, CartProduct } from './../types/products';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CartService {
   cartItems: CartProduct[] = []; 
    cartUpdates = new Subject<void>(); 
 cartUpdates$ = this.cartUpdates.asObservable();
  get count(): number {
        return this.cartItems.reduce((total, item) => item.qty + total, 0); 
    }
    constructor() { }
    add(product: Product): void {
        const existingItem = this.cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.qty++;
        } else {
            const newCartItem: CartProduct = {
                ...product, 
                qty: 1      
            };
            this.cartItems.push(newCartItem);
        }
        this.cartUpdates.next();
    }
}