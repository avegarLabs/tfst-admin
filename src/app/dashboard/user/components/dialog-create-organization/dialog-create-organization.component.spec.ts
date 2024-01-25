import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOrganizationComponent } from './dialog-create-organization.component';

describe('DialogCreateOrganizationComponent', () => {
  let component: DialogCreateOrganizationComponent;
  let fixture: ComponentFixture<DialogCreateOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
