import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pass:string;
  errormsg:string ;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onLogin()
  {
    if (this.email === 'admin' && this.pass === '123')
    {
      this.router.navigate(['/dashboard'])
    }
    else{
      this.errormsg = 'Credentials does not matched';
      window.alert("'Credentials does not matched'");
    }
    
  }

  onEmail(email:string){
this.email=email;
  }

  onPass(pass:string){
    this.pass=pass;
      }

}
