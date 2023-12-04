import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLeadComponent } from './management-lead.component';

describe('ManagementLeadComponent', () => {
  let component: ManagementLeadComponent;
  let fixture: ComponentFixture<ManagementLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementLeadComponent]
    });
    fixture = TestBed.createComponent(ManagementLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
