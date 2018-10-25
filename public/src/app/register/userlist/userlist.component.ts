/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/


import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

  allObj: any;

  constructor(private _httpService:HttpService,private _route:ActivatedRoute,private _router:Router){}
  clearObj()  { this.allObj=null;  }
  
  ngOnInit()  {
    this.clearObj();
    this.getAll();
  }

  getAll() {
    let obs = this._httpService.allUser();
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

  clickDel(id:any) {
    let obs = this._httpService.delUser(id);
    obs.subscribe(data => {
      this.allObj = data['allObj'];
    });
  }

}

