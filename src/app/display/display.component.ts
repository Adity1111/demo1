import { Component, OnInit } from '@angular/core';
import { Categoryviseservice } from '../services/categoryviewservice';
import { Product } from '../viewmodels/product';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  productList:Product[]=[];
  //   ={ProductId:1, ProductName:'POKO X3',Category:'Mobile', Description:'Very Good Phone', UnitPrice:14999, ImageUrl:'', Rating:4.5, IsAvailable:true, NoofProducts:10},
  //   {ProductId:2, ProductName:'OPPO A3',Category:'Mobile', Description:'Made by China', UnitPrice:18499, ImageUrl:'', Rating:3.8, IsAvailable:false, NoofProducts:0},
  //   {ProductId:3, ProductName:'Fastrack',Category:'Watch', Description:'Made in India', UnitPrice:3000, ImageUrl:'', Rating:4.9, IsAvailable:true, NoofProducts:200},
  //   {ProductId:4, ProductName:'Lenovo',Category:'Computer', Description:'Thinnest Laptop', UnitPrice:80000, ImageUrl:'', Rating:5, IsAvailable:true, NoofProducts:8},
  //   {ProductId:5, ProductName:'Temper Glass',Category:'Accessories', Description:'Hard life', UnitPrice:400, ImageUrl:'', Rating:3.0, IsAvailable:true, NoofProducts:100}
  // ];


  currentCategory:number;
  currentCategoryName:string;
  productservice: any;
  constructor(private shareService:Categoryviseservice) { }

  ngOnInit(): void {
    this.shareService.sharedData.subscribe(message => 
      {
        this.currentCategory = message;
        if(this.currentCategory==1){
          this.currentCategoryName="Mobiles";
        }
        else if(this.currentCategory==2){
          this.currentCategoryName="Watches";
        }
        else if(this.currentCategory==3){
          this.currentCategoryName="Computers";
        }
        else if(this.currentCategory==4){
          this.currentCategoryName="Accessories";
        }
      })

    

  }
  


getAllProducts()
{
  this.productservice.getAllProducts().subscribe(data=>{
  this.productList=data;
  });
}

}