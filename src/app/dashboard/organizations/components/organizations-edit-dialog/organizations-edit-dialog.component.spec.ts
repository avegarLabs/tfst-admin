import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsEditDialogComponent } from './organizations-edit-dialog.component';

describe('OrganizationsEditDialogComponent', () => {
  let component: OrganizationsEditDialogComponent;
  let fixture: ComponentFixture<OrganizationsEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
