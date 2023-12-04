import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ManagementHeaderComponent } from './management-layout/management-header/management-header.component';
import { ManagementSidenavComponent } from './management-layout/management-sidenav/management-sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ManagementLayoutComponent,
    ManagementHeaderComponent,
    ManagementSidenavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule { }
