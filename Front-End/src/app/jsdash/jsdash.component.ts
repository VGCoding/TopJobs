/*import { JsempdashService } from './../jsempdash.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job_Elements } from '../JSEMPR';

@Component({
  selector: 'app-jsdash',
  templateUrl: './jsdash.component.html',
  styleUrls: ['./jsdash.component.css']
})
export class JsdashComponent implements OnInit {
 job_elements:Job_Elements[];
 job_element:Job_Elements;
  constructor(private jsemp:JsempdashService) {
    this.job_element=new Job_Elements();
    jsemp.GetE().subscribe(res=>{
      this.job_elements=res;
      this.job_elements=this.job_element.list
      console.log(this.job_elements);
    })
   }
  //job_elements
//  job_elements=[{
  //  
   // PostedBy:String,
    //CompanyName:String,
    //DateCreated:Date,
    //LastDatetoApply:Date,
    //JobDescription:String,
    //JobCategory:String,
    //NoOfVacancies:Number
 // }];
 
  ngOnInit(): void {
   // this.getelements();
  }
  
  job_elements=[
    {'id':'1','heading':'Data Analyst','location':'Delhi','jobdesp':'Providing Work From Home Jobs Data Entry Jobs Part Time Full Time!!! skajcbakjscvaksjc aksjbcaosucv kasjbcoais asucbaus kausvkau iausvcvaus usvcuas ausvciauss uvsciuasvc iausvc iuasvc','company':'Infosys'},
 {'id':'2','heading':'SDE-1','location':'Banglore','jobdesp':'Providing Work From Home Jobs Data Entry Jobs Part Time Full Time!!!','company':'Wipro'},
 {'id':'3','heading':'SDE-2','location':'Noida','jobdesp':'Providing Work From Home Jobs Data Entry Jobs Part Time Full Time!!!','company':'Mindtree'},
 {'id':'4','heading':'Product-Manager','location':'Pune','jobdesp':'Providing Work From Home Jobs Data Entry Jobs Part Time Full Time!!!','company':'Microsoft'},
 {'id':'5','heading':'Business-Analyst','location':'Chandigarh','jobdesp':'Providing Work From Home Jobs Data Entry Jobs Part Time Full Time!!!','company':'GreyB'}
     ]
    
  // getelements(){
    // this.http.get<any>('ttps://localhost:44312/api/JobServices/GetAllJob').subscribe(res=>{
    //   console.log(res);
    // })
  // } 
}
*/
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Job_Elements } from '../JSEMPR';
import { JsempdashService } from '../jsempdash.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationserviceService } from '../applicationservice.service';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';
@Component({
  selector: 'app-jsdash',
  templateUrl: './jsdash.component.html',
  styleUrls: ['./jsdash.component.css']
})
export class JsdashComponent implements OnInit  {
resume:Resume;
name:string=localStorage['nameOfJobSeeker'];
// resume:string;
// applicantid:number;
// applicationStatus:string;
jobs:Job_Elements[];
constructor(private jsemp:JsempdashService,private route:ActivatedRoute,private application:ApplicationserviceService,private resumeserivce:ResumeService,private router:Router){
  this.resume=new Resume();
}
// forApplication=[
//   {name:localStorage['name'],resume:localStorage['emailAddress'],applicantid:localStorage['userId'],applicationStatus:"",jobid:localStorage['id']}
//   ]

apply(input:number)
{ localStorage['JOBidFromJsDash']=input
// this.application.PostJobsApplied({resume:localStorage['emailAddress'],applicantId:localStorage['userId'],applicationStatus:"in-progress",jobId:localStorage['id'],status:"Applied"}).subscribe(Response=>{
//   console.log(Response);
// })
console.log(localStorage['JOBidFromJsDash']);

  

  this.router.navigateByUrl('/app-resume');

}
Logout()
  {
this.router.navigateByUrl('/signup');
  }

ngOnInit(): void {
 // this.route.params.subscribe(params=>{
   // if(params.searchTerm)
    //this.jobs=this.jsemp.GetJobs().filter(food=>)
  //})
  this.jsemp.GetJobs()
.subscribe(Response => {	
console.log(Response)
this.jobs=Response;

});


}


}
