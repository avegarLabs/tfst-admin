import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsEditDialogComponent } from './professionals-edit-dialog.component';

describe('ProfessionalsEditDialogComponent', () => {
  let component: ProfessionalsEditDialogComponent;
  let fixture: ComponentFixture<ProfessionalsEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
