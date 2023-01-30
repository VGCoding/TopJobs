import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employer } from '../employer';
import { EmployerSignUpService } from '../employer-sign-up.service';
@Component({
  selector: 'app-signup-employer',
  templateUrl: './signup-employer.component.html',
  styleUrls: ['./signup-employer.component.css']
})
export class SignupEmployerComponent implements OnInit {
  addsignupjobs : FormGroup;
  employer:Employer;
  constructor(private http: HttpClient,private router : Router,private service:EmployerSignUpService) { }

  ngOnInit(): void { }
  onSubmit(data:any) {
    console.log(data);
    this.employer=data;
this.service.RegisterEmployer(this.employer).subscribe((Response:any)=>{
  alert(Response);
  console.log(Response);

})
this.router.navigateByUrl('/loginemp');
}
 
}
