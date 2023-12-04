import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { ManagementLeadRoutingModule } from './management-lead-routing.module';



@NgModule({
  declarations: [
    ManagementLeadComponent
  ],
  imports: [
    CommonModule,
    ManagementLeadRoutingModule
  ]
})
export class ManagementLeadModule { }
