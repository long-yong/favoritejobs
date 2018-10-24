
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JobComponent } from './job/job.component';
import { NewjobComponent } from './job/newjob/newjob.component';
import { EditjobComponent } from './job/editjob/editjob.component';
import { JobdetailComponent } from './job/jobdetail/jobdetail.component';


@NgModule({
  declarations: [

    AppComponent,

    JobComponent,
    NewjobComponent,
    EditjobComponent,
    JobdetailComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],

  providers: [HttpService],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
