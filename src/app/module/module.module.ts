import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { CloudComponent } from 'src/app/module/cloud/cloud.component';
import { DashboardSubmenuComponent } from 'src/app/module/dashboard-submenu/dashboard-submenu.component';
import { ComplianceSectionViewComponent } from './compliance-section-view/compliance-section-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { ResourceViewComponent } from './resource-view/resource-view.component';



@NgModule({
  declarations: [
    DashboardComponent,CloudComponent,DashboardSubmenuComponent, ComplianceSectionViewComponent, ResourceViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class ModuleModule { }
