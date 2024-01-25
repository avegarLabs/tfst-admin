import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsTableComponent } from './organizations-table.component';

describe('OrganizationsTableComponent', () => {
  let component: OrganizationsTableComponent;
  let fixture: ComponentFixture<OrganizationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
