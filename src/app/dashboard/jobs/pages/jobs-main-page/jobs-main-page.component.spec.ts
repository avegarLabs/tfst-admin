import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsMainPageComponent } from './jobs-main-page.component';

describe('JobsMainPageComponent', () => {
  let component: JobsMainPageComponent;
  let fixture: ComponentFixture<JobsMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
