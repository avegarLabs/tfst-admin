import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteDialogComponent } from './users-delete-dialog.component';

describe('UsersDeleteDialogComponent', () => {
  let component: UsersDeleteDialogComponent;
  let fixture: ComponentFixture<UsersDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
