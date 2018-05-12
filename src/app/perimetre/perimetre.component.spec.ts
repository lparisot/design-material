import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimetreComponent } from './perimetre.component';

describe('PerimetreComponent', () => {
  let component: PerimetreComponent;
  let fixture: ComponentFixture<PerimetreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerimetreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimetreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
