import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingCatModalComponent } from './camping-cat-modal.component';

describe('CampingCatModalComponent', () => {
  let component: CampingCatModalComponent;
  let fixture: ComponentFixture<CampingCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
