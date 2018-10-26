
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})

export class EditjobComponent implements OnInit {

  email:    String;
  user:     String;

  curId:    string;
  formBody: any;
  formErr:  any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  logout()        { if(this.email=='') { this._router.navigate(['/login']); return true; } else return false; }
  notErr(err:any) { if(err==undefined||err==null) return true; return false; }
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
    });
  }

  onSubmit() {
    this.editObj(this.curId,this.formBody);
  }
  
  editObj(id:any,body:any) {
    let obs = this._httpService.upJob(id,body);
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
  
