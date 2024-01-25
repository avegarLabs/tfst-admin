import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsEditDialogComponent } from './institutions-edit-dialog.component';

describe('InstitutionsEditDialogComponent', () => {
  let component: InstitutionsEditDialogComponent;
  let fixture: ComponentFixture<InstitutionsEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
