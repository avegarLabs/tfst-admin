import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusJobDialogComponent } from './status-job-dialog.component';

describe('StatusJobDialogComponent', () => {
  let component: StatusJobDialogComponent;
  let fixture: ComponentFixture<StatusJobDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusJobDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
