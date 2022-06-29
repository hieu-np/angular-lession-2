import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherlifecyclechildtwoComponent } from './otherlifecyclechildtwo.component';

describe('OtherlifecyclechildtwoComponent', () => {
  let component: OtherlifecyclechildtwoComponent;
  let fixture: ComponentFixture<OtherlifecyclechildtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherlifecyclechildtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherlifecyclechildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
