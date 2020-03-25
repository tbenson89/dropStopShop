import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiqueJunkCatModalComponent } from './antique-junk-cat-modal.component';

describe('AntiqueJunkCatModalComponent', () => {
  let component: AntiqueJunkCatModalComponent;
  let fixture: ComponentFixture<AntiqueJunkCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiqueJunkCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiqueJunkCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
