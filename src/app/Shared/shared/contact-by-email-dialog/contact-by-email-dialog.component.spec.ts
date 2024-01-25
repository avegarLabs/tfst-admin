import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactByEmailDialogComponent } from './contact-by-email-dialog.component';

describe('ContactByEmailDialogComponent', () => {
  let component: ContactByEmailDialogComponent;
  let fixture: ComponentFixture<ContactByEmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactByEmailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactByEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
