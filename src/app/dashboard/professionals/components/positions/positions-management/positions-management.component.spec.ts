import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsManagementComponent } from './positions-management.component';

describe('PositionsManagementComponent', () => {
  let component: PositionsManagementComponent;
  let fixture: ComponentFixture<PositionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
