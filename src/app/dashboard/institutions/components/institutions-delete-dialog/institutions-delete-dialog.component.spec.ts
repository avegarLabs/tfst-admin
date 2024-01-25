import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsDeleteDialogComponent } from './institutions-delete-dialog.component';

describe('InstitutionsDeleteDialogComponent', () => {
  let component: InstitutionsDeleteDialogComponent;
  let fixture: ComponentFixture<InstitutionsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
