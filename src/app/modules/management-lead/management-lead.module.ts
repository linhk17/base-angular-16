import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { ManagementLeadRoutingModule } from './management-lead-routing.module';
import { LeadInformationComponent } from './lead-information/lead-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablePaginatorComponent } from './table-paginator/table-paginator.component';



@NgModule({
  declarations: [
    ManagementLeadComponent,
    LeadInformationComponent,
    TablePaginatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ManagementLeadRoutingModule
  ]
})
export class ManagementLeadModule { }
