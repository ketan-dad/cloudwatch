import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { CloudComponent } from 'src/app/module/cloud/cloud.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardSubmenuComponent } from 'src/app/module/dashboard-submenu/dashboard-submenu.component';
import {ComplianceSectionViewComponent} from '../../module/compliance-section-view/compliance-section-view.component'
import {ResourceViewComponent} from '../../module/resource-view/resource-view.component';

@NgModule({
  declarations: [
    DefaultComponent,DashboardComponent,CloudComponent,DashboardSubmenuComponent,ComplianceSectionViewComponent,ResourceViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
