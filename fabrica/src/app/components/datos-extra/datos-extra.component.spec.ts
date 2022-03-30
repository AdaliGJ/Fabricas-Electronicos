import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosExtraComponent } from './datos-extra.component';

describe('DatosExtraComponent', () => {
  let component: DatosExtraComponent;
  let fixture: ComponentFixture<DatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
