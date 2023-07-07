import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SingleSourcePlatform';

  myPersonal:Personal={

  FullName: "Pooja",
  Age:21,
  Gender:"Female",
  DOB:"1999-04-29",
  EducationQualification:[
    {Course:"B.E", Institute:"PESCE", Year:"2018 - ", Percentage:"8.26"},
    {Course:"PUE", Institute:"Srinivasa Indp PU Collge", Year:"2013 - 2015", Percentage:"62.7"},
    {Course:"High School", Institute:"Parikrma Centre for Learning", Year:"2003 - 2013", Percentage:"80.80%"}
  ],
  Address:["#548, 5th cross, 6th main road, VR Nagar, Jayanagar 1st Block, Bangalore,560011","Address 2"],
  Email:"adityaraj@gmail.com",
  PhNum:8050180183,
  FName:"Selvaraj",
  MName:"Pushpa",
  Hobbies:["Chess", "Swimming", "Cycling"],
  Tech:["Py", "Django", "Flask", "ML", "FullStack"]

  
};


}
class Personal{
  FullName:string;
  Age:number;
  Gender:string;
  DOB:string;
  EducationQualification:any[];
  Address:string[];
  Email:string;
  PhNum:number;
  FName:string;
  MName:string;
  Hobbies:string[];
  Tech:string[];
}