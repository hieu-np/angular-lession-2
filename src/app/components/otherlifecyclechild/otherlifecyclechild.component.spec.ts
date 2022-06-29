import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherlifecyclechildComponent } from './otherlifecyclechild.component';

describe('OtherlifecyclechildComponent', () => {
  let component: OtherlifecyclechildComponent;
  let fixture: ComponentFixture<OtherlifecyclechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherlifecyclechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherlifecyclechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
