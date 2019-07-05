import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBusComponent } from './choose-bus.component';

describe('ChooseBusComponent', () => {
  let component: ChooseBusComponent;
  let fixture: ComponentFixture<ChooseBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
