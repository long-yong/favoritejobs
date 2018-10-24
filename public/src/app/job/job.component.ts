
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {

  allObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  { 
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

  clickDel(id:any) {
    let obs = this._httpService.delJob(id);
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

  clickSort() {
    let obs = this._httpService.allJobSorted();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

}

