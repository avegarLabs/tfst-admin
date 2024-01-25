import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMainPageComponent } from './skills-main-page.component';

describe('SkillsMainPageComponent', () => {
  let component: SkillsMainPageComponent;
  let fixture: ComponentFixture<SkillsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
