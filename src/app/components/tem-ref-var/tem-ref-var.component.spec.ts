import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemRefVarComponent } from './tem-ref-var.component';

describe('TemRefVarComponent', () => {
  let component: TemRefVarComponent;
  let fixture: ComponentFixture<TemRefVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemRefVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
