import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CartList } from "./cart-list/cart-list";
import { Category } from './category/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ],
  imports: [RouterOutlet, CartList, Category]
})
export class Home implements OnInit {
constructor( ) {
  }


   ngOnInit() {
    console.log()
  }
}
