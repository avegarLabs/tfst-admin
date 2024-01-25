import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateProfessionalComponent } from './dialog-create-professional.component';

describe('DialogCreateProfessionalComponent', () => {
  let component: DialogCreateProfessionalComponent;
  let fixture: ComponentFixture<DialogCreateProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
