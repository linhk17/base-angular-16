import { Component } from '@angular/core';

@Component({
  selector: 'app-management-lead',
  templateUrl: './management-lead.component.html',
  styleUrls: ['./management-lead.component.scss'],
})
export class ManagementLeadComponent {
  selected: string = 'all';
  dataSource: any[] = [];
  column: any[] = ['Lead ID', 'Borrower', 'Phone Number', 'Email', 'State', 'Lead Source', 'Status', 'Action' ];
  
  ngOnInit(){
    for (let index = 0; index < 10; index++) {
      this.dataSource.push(
        {
          id: '#001',
          username: 'User Name',
          phoneNumber: 'Education',
          email: 1000000,
          state: 10,
          leadSource: new Date(),
          status: Math.floor(Math.random() * (2 - 0 + 1) + 0),
        }
      )
    }
  }
}
