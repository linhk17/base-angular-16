import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { ManagementLeadRoutingModule } from './management-lead-routing.module';
import { LeadInformationComponent } from './lead-information/lead-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManagementLeadComponent,
    LeadInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    ManagementLeadRoutingModule
  ]
})
export class ManagementLeadModule { }
