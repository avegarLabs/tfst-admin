import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationManagementPageComponent } from './organization-management-page.component';

describe('OrganizationManagementPageComponent', () => {
  let component: OrganizationManagementPageComponent;
  let fixture: ComponentFixture<OrganizationManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
