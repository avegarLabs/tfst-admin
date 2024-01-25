import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesManagementComponent } from './titles-management.component';

describe('TitlesManagementComponent', () => {
  let component: TitlesManagementComponent;
  let fixture: ComponentFixture<TitlesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
