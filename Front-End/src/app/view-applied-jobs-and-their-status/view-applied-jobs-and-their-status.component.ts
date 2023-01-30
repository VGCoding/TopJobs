import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from '../applicationservice.service';
import { Applications } from '../applications';
import { JsempdashService } from '../jsempdash.service';
import { Job_Elements } from '../JSEMPR';

@Component({
  selector: 'app-view-applied-jobs-and-their-status',
  templateUrl: './view-applied-jobs-and-their-status.component.html',
  styleUrls: ['./view-applied-jobs-and-their-status.component.css']
})
export class ViewAppliedJobsAndTheirStatusComponent implements OnInit {
  applications:Applications[];
  job:Job_Elements;
  constructor(private serv:ApplicationserviceService,private service:JsempdashService) { 
    this.job=new Job_Elements();
  }
  applicantId=localStorage['userIdOfJobSeeker'];
  ngOnInit(): void {
   
    this.serv.GetApplicationsInfoForParticularJobSeeker(this.applicantId).subscribe(Response=>{
      console.log(Response);
      this.applications=Response;
      
    })
  }
  cl(jobId:number)
  {
   this.service.GetJobbyJobId(jobId).subscribe(response=>
   {
 this.job=response;
   })
  }
}
