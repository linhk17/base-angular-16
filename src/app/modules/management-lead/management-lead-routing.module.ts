import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { RouterModule, Routes } from '@angular/router';
import { LeadInformationComponent } from './lead-information/lead-information.component';

const routes: Routes = [
  { path: 'management-lead', pathMatch: 'full', redirectTo: '/dashboard' },

  {
    path: 'dashboard',
    component: ManagementLeadComponent,
  },
  {
    path: 'information',
    component: LeadInformationComponent,
  },
  {
    path: 'information/:id',
    component: LeadInformationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementLeadRoutingModule { }
