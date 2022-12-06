import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppositionRhComponent } from './opposition-rh.component';

describe('OppositionRhComponent', () => {
  let component: OppositionRhComponent;
  let fixture: ComponentFixture<OppositionRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppositionRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppositionRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
