import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { ManagementLeadRoutingModule } from './management-lead-routing.module';
import { LeadInformationComponent } from './lead-information/lead-information.component';



@NgModule({
  declarations: [
    ManagementLeadComponent,
    LeadInformationComponent
  ],
  imports: [
    CommonModule,
    ManagementLeadRoutingModule
  ]
})
export class ManagementLeadModule { }
