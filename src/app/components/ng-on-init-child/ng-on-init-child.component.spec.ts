import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitChildComponent } from './ng-on-init-child.component';

describe('NgOnInitChildComponent', () => {
  let component: NgOnInitChildComponent;
  let fixture: ComponentFixture<NgOnInitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnInitChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
