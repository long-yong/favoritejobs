
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
  
  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }  
  clearObj()      {  }

  clearFormErr()  {
    this.formErr=null;
    this.formBody = { };
  }
  
  ngOnInit() {
    this.clearFormErr();
    this.clearObj();
  }

  onSubmitReg() {
    this.newObj(this.formBody);
  }

  newObj(body){
    let obs = this._httpService.newJob(body);
    obs.subscribe(data => {
      this.formErr = data['errArr'];
        if(this.notErr(this.formErr)) {
        this._router.navigate(['/job']);
        }
    });
  }

  clickCancel() {
    this._router.navigate(['/job']);
  }

}
