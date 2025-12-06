import { ProductService } from './../services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CartService } from './../services/cart.service';
import { Product } from '../types/products';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  // 1. แก้ไข: ประกาศเป็น public และกำหนดค่าเริ่มต้นเป็น Array ว่าง
  public selectedCatList: Product[] = [];
route = inject(ActivatedRoute);
router = inject(Router);
cartService =inject(CartService);
productService=inject(ProductService);
  constructor( 
  ) {}

  ngOnInit() {
    // 2. แก้ไข: ดึงค่าและแปลงเป็นตัวเลขอย่างปลอดภัย
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;

    if (!isNaN(id)) {
      this.selectedCatList = this.productService.getCategoryItems(id);
    } else {
      // จัดการกรณี id ไม่ถูกต้อง
      this.selectedCatList = [];
    }
  } // 3. แก้ไข: เปลี่ยนเป็น public เพื่อให้เรียกใช้ได้จาก Template

  public addToCart(product: Product): void {
    this.cartService.add(product);
  }
}
