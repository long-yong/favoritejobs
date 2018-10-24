
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobComponent } from './job/job.component';
import { NewjobComponent } from './job/newjob/newjob.component';
import { EditjobComponent } from './job/editjob/editjob.component';
import { JobdetailComponent } from './job/jobdetail/jobdetail.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/job' },

  { path: 'job',component:JobComponent },
  { path: 'job/newjob',component: NewjobComponent },
  { path: 'job/editjob/:id',component: EditjobComponent },
  { path: 'job/detail/:id',component: JobdetailComponent },

  // manually add routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

