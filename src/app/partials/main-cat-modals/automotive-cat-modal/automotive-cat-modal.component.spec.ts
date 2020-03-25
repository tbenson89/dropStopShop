import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveCatModalComponent } from './automotive-cat-modal.component';

describe('AutomotiveCatModalComponent', () => {
  let component: AutomotiveCatModalComponent;
  let fixture: ComponentFixture<AutomotiveCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomotiveCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotiveCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
