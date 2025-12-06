import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CartList } from "./cart-list/cart-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: [ './home.scss' ],
  imports: [RouterOutlet, CartList]
})
export class Home implements OnInit {
constructor( ) {
  }


   ngOnInit() {
    console.log()
  }
}
