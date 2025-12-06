import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';



@Component({
  selector: 'app-category',
   imports: [RouterModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class Category  {

  public categories:{id:number,name:string}[] =[
    {name: 'Men Accessories', id: 1},
    {name: 'Woman Accessories', id: 2},
    {name: 'Kids Accessories', id: 3},
    {name: 'Sports Accessories', id: 4}
  ]


  constructor() { 


  }


}
