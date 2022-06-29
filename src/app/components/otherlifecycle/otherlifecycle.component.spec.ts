import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherlifecycleComponent } from './otherlifecycle.component';

describe('OtherlifecycleComponent', () => {
  let component: OtherlifecycleComponent;
  let fixture: ComponentFixture<OtherlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
