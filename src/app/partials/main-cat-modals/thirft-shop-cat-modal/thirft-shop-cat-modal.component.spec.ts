import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirftShopCatModalComponent } from './thirft-shop-cat-modal.component';

describe('ThirftShopCatModalComponent', () => {
  let component: ThirftShopCatModalComponent;
  let fixture: ComponentFixture<ThirftShopCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirftShopCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirftShopCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
