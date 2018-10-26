
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})

export class JobdetailComponent implements OnInit {

  email:    String;
  user:     String;

  curId:    string;
  formBody: any;
  formErr:  any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  logout()        { if(this.email=='') { this._router.navigate(['/login']); return true; } else return false; }
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
  clearFormErr()  { this.formErr=null;  this.formBody = { name:""}; }

  ngOnInit() {
    this.user=this._httpService.user();
    this.email=this._httpService.email();
    if(this.logout()) return;
    this.clearFormErr();
    this._route.params.subscribe((params:Params)=>{
      this.curId =  params['id'];
      this.getOne(this.curId);
    });
  }
  
  getOne(id:string) {
    let obs = this._httpService.oneJob(id);
    obs.subscribe(data => {
      this.formBody = data['oneObj'];
      if(this.formBody.companyUrl  !=undefined) this.formBody.companyUrl_  ='URL:'; else this.formBody.companyUrl_   = this.formBody.companyUrl;
      if(this.formBody.agentUrl    !=undefined) this.formBody.agentUrl_    ='URL:'; else this.formBody.agentUrl_     = this.formBody.agentUrl;  
      if(this.formBody.supplierUrl !=undefined) this.formBody.supplierUrl_ ='URL:'; else this.formBody.supplierUrl_  = this.formBody.supplierUrl;
    });
  }

  clickCancel() {
    this._router.navigate(['/job']);
  }

  clickDelete() {
    let obs = this._httpService.delJob(this.curId);
    obs.subscribe(data => {
      this._router.navigate(['/job']);
    });
  }

}
  



  

