import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEditDialogComponent } from './users-edit-dialog.component';

describe('UsersEditDialogComponent', () => {
  let component: UsersEditDialogComponent;
  let fixture: ComponentFixture<UsersEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
