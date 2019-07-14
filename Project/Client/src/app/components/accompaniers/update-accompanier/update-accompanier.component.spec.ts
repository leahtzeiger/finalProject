import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccompanierComponent } from './update-accompanier.component';

describe('UpdateAccompanierComponent', () => {
  let component: UpdateAccompanierComponent;
  let fixture: ComponentFixture<UpdateAccompanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccompanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccompanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
