import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsMainPageComponent } from './professionals-main-page.component';

describe('ProfessionalsMainPageComponent', () => {
  let component: ProfessionalsMainPageComponent;
  let fixture: ComponentFixture<ProfessionalsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
