import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSugestionsComponent } from './jobs-sugestions.component';

describe('JobsSugestionsComponent', () => {
  let component: JobsSugestionsComponent;
  let fixture: ComponentFixture<JobsSugestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsSugestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsSugestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
