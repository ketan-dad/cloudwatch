import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { CloudComponent } from './module/cloud/cloud.component';


const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'cloud', component:CloudComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
