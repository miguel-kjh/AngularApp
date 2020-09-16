import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFromComponent } from './place-from.component';

describe('PlaceFromComponent', () => {
  let component: PlaceFromComponent;
  let fixture: ComponentFixture<PlaceFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
