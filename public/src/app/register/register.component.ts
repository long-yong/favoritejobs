
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formBody: any;
  formErr:  any;

  formBody2: any;
  formErr2:  any;
  
  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }  

  clearForm() {
    this.formErr = null;
    this.formBody = { };
  }

  clearForm2() {
    this.formErr2 = null;
    this.formBody2 = { };
  }

  ngOnInit() {
    this.clearForm();
    this.clearForm2();
  }

  onSubmitReg() {
    this.newObj(this.formBody);
  }

  newObj(body){
    this.clearForm2();
    if(body.password!=body.passwordCfm) {
      this.formErr = ['Password & Passward Cfm do not match']; 
      return;
    }
    let obs = this._httpService.newUser(body);
    obs.subscribe(data => {
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
          let oneObj = data['oneObj'];
          let name = oneObj.firstName+' '+oneObj.lastName;
          let email = oneObj.email;
          this._httpService.setLogin(name,email);
          this._router.navigate(['/job']);
        }
    });
  }

  onSubmitLogin() {
    this.login(this.formBody2);
  }

  login(body) {
    this.clearForm();
    let err = [];
    if(body.email==undefined)    { err.push('Email is required.') }
    if(body.password==undefined) { err.push('Password is required.') }
    if(err.length>0)             { this.formErr2 = err; }      
    else {
      let obs = this._httpService.chkUser(body);
      obs.subscribe(data => {
        this.formErr2 = [];
        let oneObj = data['oneObj'];
        if(oneObj.length==0) this.formErr2.push('Email and password do not match!');
        else { 
          let name = oneObj[0].firstName+' '+oneObj[0].lastName;
          let email = oneObj[0].email;
          this._httpService.setLogin(name,email);
          this._router.navigate(['/job']);
        }
      })
    }
  }

}
