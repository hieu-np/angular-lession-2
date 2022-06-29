import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherlifecyclechildthreeComponent } from './otherlifecyclechildthree.component';

describe('OtherlifecyclechildthreeComponent', () => {
  let component: OtherlifecyclechildthreeComponent;
  let fixture: ComponentFixture<OtherlifecyclechildthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherlifecyclechildthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherlifecyclechildthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
