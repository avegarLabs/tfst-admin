import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsMainPageComponent } from './institutions-main-page.component';

describe('InstitutionsMainPageComponent', () => {
  let component: InstitutionsMainPageComponent;
  let fixture: ComponentFixture<InstitutionsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
