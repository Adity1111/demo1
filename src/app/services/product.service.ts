import { Injectable } from '@angular/core';
import{HttpClient} from   '@angular/common/http'; 
import{ Product } from  '../viewmodels/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:string="https://localhost:44312/api/Product";
  constructor(private http:HttpClient) { }
  getAllProducts()
  {
    return this.http.get<Product[]>(this.baseUrl+'/GetProducts');
  }
}