
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './register/pagenotfound/pagenotfound.component';

import { JobComponent } from './job/job.component';
import { NewjobComponent } from './job/newjob/newjob.component';
import { EditjobComponent } from './job/editjob/editjob.component';
import { JobdetailComponent } from './job/jobdetail/jobdetail.component';
import { UserlistComponent } from './register/userlist/userlist.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/job' },

  { path: 'login',component:RegisterComponent },
  { path: 'login/ccad@myccad.com',component:UserlistComponent },

  { path: 'job',component:JobComponent },
  { path: 'job/newjob',component: NewjobComponent },
  { path: 'job/editjob/:id',component: EditjobComponent },
  { path: 'job/detail/:id',component: JobdetailComponent },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

