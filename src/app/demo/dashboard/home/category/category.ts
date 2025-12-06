import { Router, RouterModule } from '@angular/router';
import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-category',
   imports: [RouterModule, CommonModule],
  templateUrl: './category.html',
  styleUrls: ['./category.scss']
})
export class Category implements OnInit  {


  public categories:{id:number,name:string}[] =[
    {name: 'Men Accessories', id: 1},
    {name: 'Woman Accessories', id: 2},
    {name: 'Kids Accessories', id: 3},
    {name: 'Sports Accessories', id: 4}
  ]

  router = inject(Router);
  constructor() {
  }

  ngOnInit(): void {
    console.log("test");
  }

  goToProducts(priduct_id: number) {
    this.router.navigate(["home/product", priduct_id]);

  }

}
