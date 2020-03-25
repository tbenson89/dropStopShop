import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingCatModalComponent } from './swimming-cat-modal.component';

describe('SwimmingCatModalComponent', () => {
  let component: SwimmingCatModalComponent;
  let fixture: ComponentFixture<SwimmingCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
