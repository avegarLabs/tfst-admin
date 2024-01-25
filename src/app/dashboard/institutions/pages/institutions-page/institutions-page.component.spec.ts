import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsPageComponent } from './institutions-page.component';

describe('InstitutionsPageComponent', () => {
  let component: InstitutionsPageComponent;
  let fixture: ComponentFixture<InstitutionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
