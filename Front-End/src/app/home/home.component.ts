import { Component, OnInit } from '@angular/core';
import { Job_Elements } from '../JSEMPR';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  input:string;
  Jobs:Job_Elements[];
  constructor(private service:SearchService,private router : Router) { }

  ngOnInit(): void {
  }
  OnSubmit(data:string){
    console.log(data)
       this.service.GetJobsByCategory(data).subscribe(Response=>{
        console.log(Response);
         this.Jobs=Response;
       })}
       apply()
       {
         this.router.navigateByUrl('/signup')
       }

  myimage:string="/assets/images/hp.jpg";
  
  
   image1="/assets/images/airbus.jpg";
   image2='/assets/images/Intel.jpg';
   image3='/assets/images/Loreal.jpg';
   image4='/assets/images/MorganStanley.jpg';
  oc1(){
    this.router.navigateByUrl('https://careers.wipro.com/careers-home');
  }
}
