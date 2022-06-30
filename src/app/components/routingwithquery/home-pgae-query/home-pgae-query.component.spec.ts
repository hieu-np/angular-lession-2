import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePgaeQueryComponent } from './home-pgae-query.component';

describe('HomePgaeQueryComponent', () => {
  let component: HomePgaeQueryComponent;
  let fixture: ComponentFixture<HomePgaeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePgaeQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePgaeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
