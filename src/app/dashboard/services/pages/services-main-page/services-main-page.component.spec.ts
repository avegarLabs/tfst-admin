import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMainPageComponent } from './services-main-page.component';

describe('ServicesMainPageComponent', () => {
  let component: ServicesMainPageComponent;
  let fixture: ComponentFixture<ServicesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
