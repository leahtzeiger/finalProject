import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcompanierComponent } from './show-acompanier.component';

describe('ShowAcompanierComponent', () => {
  let component: ShowAcompanierComponent;
  let fixture: ComponentFixture<ShowAcompanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAcompanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAcompanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
