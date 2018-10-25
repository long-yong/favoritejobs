
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})

export class NewjobComponent implements OnInit {

  email:    String;
  user:     String;

  formBody: any;
  formErr:  any;
  
  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  logout()        { if(this.email=='') return true; return false; }
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }  

  clearFormErr()  {
    this.formErr=null;
    this.formBody = { };
    this.formBody['email'] = this.email;
  }
  
  ngOnInit() {
    this.user=this._httpService.user();
    this.email=this._httpService.email();
    this.clearFormErr();
  }

  onSubmitNew() {
    this.newObj(this.formBody);
  }

  newObj(body){
    if(this.logout()) return;
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
