import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccompanierComponent } from './add-accompanier.component';

describe('AddAccompanierComponent', () => {
  let component: AddAccompanierComponent;
  let fixture: ComponentFixture<AddAccompanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccompanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccompanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
