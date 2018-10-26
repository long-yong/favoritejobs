
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {

  user:   string;
  email:  string; 

  allObj: any;
  counter: number;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  logout()    { if(this.email=='') { this._router.navigate(['/login']); return true; } else return false; }
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  {
    this.counter = 0;
    this.user=this._httpService.user();
    this.email=this._httpService.email();
    if(this.logout()) return;
    this.clearObj();
    this.getAll();
  }

  getAll() {
    let obs = this._httpService.allJob();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

  clickView(id:any) {
    this._router.navigate(['/job/detail/'+id]);
  }

  clickEdit(id:any) {
    this._router.navigate(['/job/editjob/'+id]);
  }

  deloneFromAllobj(id:any) {
    for(let i=0; i<this.allObj.length;i++) {
      if(this.allObj[i]['_id']==id) {
        this.allObj.splice(i,1);
        break;
      } 
    }
  }

  clickDel(id:any) {
    let obs = this._httpService.delJob(id);
    obs.subscribe(data => {
      this.deloneFromAllobj(id);
    });
  }

  willSwap(key, i, j) {
    let vi = this.allObj[i][key];
    let vj = this.allObj[j][key];
    if(vi==undefined) vi='';
    if(vj==undefined) vj='';
    if(this.counter%2==0&&vi>vj) return true;
    if(this.counter%2==1&&vi<vj) return true;
    return false;
  } 

  swap(i,j) {
    let tmp = this.allObj[i];
    this.allObj[i] = this.allObj[j];
    this.allObj[j] = tmp;
  }

  clickSort(key:string) {
    let len = this.allObj.length;
    for(let i=0; i<len-1; i++)
    for(let j=i+1; j<len; j++) {
       if(this.willSwap(key,i,j)) {
          this.swap(i,j);
       }
    }
    this.counter++;
  }

}

