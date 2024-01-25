import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsProfessionalManagementComponent } from './skills-professional-management.component';

describe('SkillsProfessionalManagementComponent', () => {
  let component: SkillsProfessionalManagementComponent;
  let fixture: ComponentFixture<SkillsProfessionalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsProfessionalManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsProfessionalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
