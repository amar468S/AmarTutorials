import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     {
       path:'login',
       component:LoginComponent
     },
     {
      path:'admin',
      component:AdminComponent
     },
     {
        path:'',
        component:HomeComponent  
     } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }