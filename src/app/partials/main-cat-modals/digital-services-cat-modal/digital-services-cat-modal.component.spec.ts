import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalServicesCatModalComponent } from './digital-services-cat-modal.component';

describe('DigitalServicesCatModalComponent', () => {
  let component: DigitalServicesCatModalComponent;
  let fixture: ComponentFixture<DigitalServicesCatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalServicesCatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalServicesCatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
