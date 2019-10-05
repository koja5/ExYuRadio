import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRadioComponent } from './single-radio.component';

describe('SingleRadioComponent', () => {
  let component: SingleRadioComponent;
  let fixture: ComponentFixture<SingleRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
