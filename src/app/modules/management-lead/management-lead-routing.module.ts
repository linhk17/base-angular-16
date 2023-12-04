import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementLeadComponent } from './management-lead.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManagementLeadComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementLeadRoutingModule { }
