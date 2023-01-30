import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup-jobseeker',
  templateUrl: './signup-jobseeker.component.html',
  styleUrls: ['./signup-jobseeker.component.css']
})
export class SignupJobseekerComponent implements OnInit {

  
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(data:any) {
    this.http.post('https://localhost:44386/api/Details/RegisterForJobSeeker',data,{responseType: 'text'})
    .subscribe((result)=>{
      console.log(result);
      this.router.navigateByUrl('/loginjs');
    })
   
         }

}
