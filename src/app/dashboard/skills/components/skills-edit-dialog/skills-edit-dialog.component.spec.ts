import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEditDialogComponent } from './skills-edit-dialog.component';

describe('SkillsEditDialogComponent', () => {
  let component: SkillsEditDialogComponent;
  let fixture: ComponentFixture<SkillsEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
