import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { DashboardSubmenuComponent } from './module/dashboard-submenu/dashboard-submenu.component';
import { LoginComponent } from './login/login.component';
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
