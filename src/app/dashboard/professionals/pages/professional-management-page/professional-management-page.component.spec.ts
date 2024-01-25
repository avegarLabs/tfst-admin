import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalManagementPageComponent } from './professional-management-page.component';

describe('ProfessionalManagementPageComponent', () => {
  let component: ProfessionalManagementPageComponent;
  let fixture: ComponentFixture<ProfessionalManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
