import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name:string;

  public password:string;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.name="";
    this.password="";
  }
  public login(){
    alert(this.name)
this.loginService.login(this.name,this.password)
.subscribe(()=>{
  this.router.navigate(['/resourses']);
}),err=>console.log("user name or password invalid!")
  }
}
