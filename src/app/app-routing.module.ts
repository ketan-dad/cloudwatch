import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { CloudComponent } from './module/cloud/cloud.component';
import { ComplianceSectionViewComponent } from './module/compliance-section-view/compliance-section-view.component';
import { ResourceViewComponent } from './module/resource-view/resource-view.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : 'dashboard',
    component : DefaultComponent,
    children:[
      {path:'', component:DashboardComponent, children :[
        {path : '',component : ComplianceSectionViewComponent},
        {path : 'resourceview',component : ResourceViewComponent}
       ]},
        ]
  },{path:'', component:LoginComponent},{path:'cloud', component:CloudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
