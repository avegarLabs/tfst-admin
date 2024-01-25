import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesMainPageComponent } from './countries-main-page.component';

describe('CountriesMainPageComponent', () => {
  let component: CountriesMainPageComponent;
  let fixture: ComponentFixture<CountriesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
