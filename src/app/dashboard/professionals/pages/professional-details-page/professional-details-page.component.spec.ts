import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDetailsPageComponent } from './professional-details-page.component';

describe('ProfessionalDetailsPageComponent', () => {
  let component: ProfessionalDetailsPageComponent;
  let fixture: ComponentFixture<ProfessionalDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
