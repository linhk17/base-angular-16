import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementLayoutComponent } from './modules/layouts/management-layout/management-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/management-lead/dashboard' },
  {
    path: 'management-lead',
    component: ManagementLayoutComponent,
    loadChildren: () => import('./modules/management-lead/management-lead.module')
    .then((m) => m.ManagementLeadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
