import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProfessionalDeleteComponent } from './skill-professional-delete.component';

describe('SkillProfessionalDeleteComponent', () => {
  let component: SkillProfessionalDeleteComponent;
  let fixture: ComponentFixture<SkillProfessionalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillProfessionalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillProfessionalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
