import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsMainPageComponent } from './organizations-main-page.component';

describe('OrganizationsMainPageComponent', () => {
  let component: OrganizationsMainPageComponent;
  let fixture: ComponentFixture<OrganizationsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
