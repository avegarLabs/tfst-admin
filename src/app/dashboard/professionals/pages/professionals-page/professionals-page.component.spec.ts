import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsPageComponent } from './professionals-page.component';

describe('ProfessionalsPageComponent', () => {
  let component: ProfessionalsPageComponent;
  let fixture: ComponentFixture<ProfessionalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
