import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanierListComponent } from './accompanier-list.component';

describe('AccompanierListComponent', () => {
  let component: AccompanierListComponent;
  let fixture: ComponentFixture<AccompanierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompanierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompanierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
