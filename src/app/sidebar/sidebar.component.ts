import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoryviseservice } from '../services/categoryviewservice';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedCategory:number;
  constructor(private router:Router,private shareService:Categoryviseservice) { }

  ngOnInit(): void {
    this.shareService.sharedData.subscribe(message => this.selectedCategory = message)
  }

  SendCategoryData(category:number){
    this.shareService.ChangeSelectedCategory(category);
    this.router.navigate(['display']);
  }



}
