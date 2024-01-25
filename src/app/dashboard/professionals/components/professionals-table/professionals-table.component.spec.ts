import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsTableComponent } from './professionals-table.component';

describe('ProfessionalsTableComponent', () => {
  let component: ProfessionalsTableComponent;
  let fixture: ComponentFixture<ProfessionalsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
