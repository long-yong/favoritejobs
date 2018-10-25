
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  loginUser  = 'Nobody';
  loginEmail = 'nobody@test.com';

  constructor(private _http: HttpClient) { }

  // login
  user()                  { return this.loginUser;   }
  email()                 { return this.loginEmail;  }
  setLogin(user,email)    { this.loginUser=user; this.loginEmail=email;  }
  setLogout()             { this.loginUser='';   this.loginEmail='';     }

  // user
  allUser()               { return this._http.get('/alluser');           }
  newUser(body:any)       { return this._http.post('/newuser',   body);  }
  chkUser(body:any)       { return this._http.post('/chkuser',   body);  }
  delUser(id:any)         { return this._http.get('/deluser/'+id);       }


  // job
  allJob()                { return this._http.get('/alljob');            }
  oneJob(id:any)          { return this._http.get('/onejob/'+id);        }
  newJob(body:any)        { return this._http.post('/newjob',    body);  }
  upJob(id:any,body:any)  { return this._http.post('/upjob/'+id, body);  }
  delJob(id:any)          { return this._http.get('/deljob/'+id);        }
  allJobSorted()          { return this._http.get('/alljobsorted');      }

}
