import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Loginviewmodel } from '../viewmodels/loginviewmodel.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetail:Loginviewmodel={Email:'', Password:''};
    constructor(private loginService:LoginService) { }
  
  
  ngOnInit(): void {
  }

  Login(){  
    this.loginService.Login(this.loginDetail).subscribe(
      data=>{
        if(data==0){
          alert('Login Failed');

        }
        else{
          alert('Login Success');
        }
       

      },
      error=>{
       
      }
    );
  }

 }



