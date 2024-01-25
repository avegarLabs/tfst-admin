import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProfessionalDialogComponent } from './skill-professional-dialog.component';

describe('SkillProfessionalDialogComponent', () => {
  let component: SkillProfessionalDialogComponent;
  let fixture: ComponentFixture<SkillProfessionalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillProfessionalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillProfessionalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
