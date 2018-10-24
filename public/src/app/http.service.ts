
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){ }

  // pet

  allJob()                { return this._http.get('/alljob');            }
  oneJob(id:any)          { return this._http.get('/onejob/'+id);        }
  newJob(body:any)        { return this._http.post('/newjob',    body);  }
  upJob(id:any,body:any)  { return this._http.post('/upjob/'+id, body);  }
  delJob(id:any)          { return this._http.get('/deljob/'+id);        }
  allJobSorted()          { return this._http.get('/alljobsorted');      }

}
