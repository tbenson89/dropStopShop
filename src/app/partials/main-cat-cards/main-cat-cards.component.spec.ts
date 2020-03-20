import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatCardsComponent } from './main-cat-cards.component';

describe('MainCatCardsComponent', () => {
  let component: MainCatCardsComponent;
  let fixture: ComponentFixture<MainCatCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
