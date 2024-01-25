import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsDeleteDialogComponent } from './professionals-delete-dialog.component';

describe('ProfessionalsDeleteDialogComponent', () => {
  let component: ProfessionalsDeleteDialogComponent;
  let fixture: ComponentFixture<ProfessionalsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
