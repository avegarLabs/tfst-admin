import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsDeleteDialogComponent } from './organizations-delete-dialog.component';

describe('OrganizationsDeleteDialogComponent', () => {
  let component: OrganizationsDeleteDialogComponent;
  let fixture: ComponentFixture<OrganizationsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
