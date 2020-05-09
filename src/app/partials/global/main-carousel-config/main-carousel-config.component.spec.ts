import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarouselConfigComponent } from './main-carousel-config.component';

describe('MainCarouselConfigComponent', () => {
  let component: MainCarouselConfigComponent;
  let fixture: ComponentFixture<MainCarouselConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarouselConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarouselConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
