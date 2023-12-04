import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { menuSide } from 'src/app/shared/utils/menu-side';

@Component({
  selector: 'app-management-sidenav',
  templateUrl: './management-sidenav.component.html',
  styleUrls: ['./management-sidenav.component.scss'],
})
export class ManagementSidenavComponent {
  menuSideNav = menuSide;
 
}
