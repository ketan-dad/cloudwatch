import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { CloudComponent } from './module/cloud/cloud.component';
import { ComplianceSectionViewComponent } from './module/compliance-section-view/compliance-section-view.component';
import { ResourceViewComponent } from './module/resource-view/resource-view.component';


const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    children:[
      {path:'', component:DashboardComponent, children :[
        {path : '',component : ComplianceSectionViewComponent},
        {path : 'dashboard/resourceview',component : ResourceViewComponent}
       ]},
      {path:'cloud', component:CloudComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
