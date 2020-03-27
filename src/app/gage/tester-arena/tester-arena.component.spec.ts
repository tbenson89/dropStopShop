import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterArenaComponent } from './tester-arena.component';

describe('TesterArenaComponent', () => {
  let component: TesterArenaComponent;
  let fixture: ComponentFixture<TesterArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
