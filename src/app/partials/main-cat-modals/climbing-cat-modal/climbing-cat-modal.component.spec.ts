import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingCatModalComponent } from './climbing-cat-modal.component';

describe('ClimbingCatModalComponent', () => {
  let component: ClimbingCatModalComponent;
  let fixture: ComponentFixture<ClimbingCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
