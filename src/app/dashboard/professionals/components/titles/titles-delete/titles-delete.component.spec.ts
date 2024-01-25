import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesDeleteComponent } from './titles-delete.component';

describe('TitlesDeleteComponent', () => {
  let component: TitlesDeleteComponent;
  let fixture: ComponentFixture<TitlesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
