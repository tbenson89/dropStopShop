import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainCatsComponent } from './landing-main-cats.component';

describe('LandingMainCatsComponent', () => {
  let component: LandingMainCatsComponent;
  let fixture: ComponentFixture<LandingMainCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMainCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMainCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
