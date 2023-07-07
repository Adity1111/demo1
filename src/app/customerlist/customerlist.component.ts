import { Component, OnInit } from '@angular/core';
import { CustomerlistService } from '../services/customerlist.service';
import { customer } from '../viewmodels/customerlist';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  
  customerList:customer[]=[

    {customerId:1, customerName:'',address:'Mobile', state:'Very Good Phone', country:'india'},
    {customerId:2, customerName:'OPPO A3',address:'Mobile', state:'Made by China', country:'us'},
    {customerId:3, customerName:'Fastrack',address:'Watch', state:'Made in India', country:'unitedstate'},
    {customerId:4, customerName:'Lenovo',address:'Computer', state:'Thinnest Laptop', country:'china'},
  ];


  currentCategory:number;
  currentCategoryName:string;
  customerName: string;
  constructor(private shareService:CustomerlistService) { }

  ngOnInit(): void {
   
    

  }
  

}
