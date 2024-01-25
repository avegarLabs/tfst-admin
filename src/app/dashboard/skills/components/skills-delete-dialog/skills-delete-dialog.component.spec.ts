import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDeleteDialogComponent } from './skills-delete-dialog.component';

describe('SkillsDeleteDialogComponent', () => {
  let component: SkillsDeleteDialogComponent;
  let fixture: ComponentFixture<SkillsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
