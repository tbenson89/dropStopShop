import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnessCatModalComponent } from './randomness-cat-modal.component';

describe('RandomnessCatModalComponent', () => {
  let component: RandomnessCatModalComponent;
  let fixture: ComponentFixture<RandomnessCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomnessCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomnessCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
