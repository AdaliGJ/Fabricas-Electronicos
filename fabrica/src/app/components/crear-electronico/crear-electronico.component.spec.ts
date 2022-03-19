import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearElectronicoComponent } from './crear-electronico.component';

describe('CrearElectronicoComponent', () => {
  let component: CrearElectronicoComponent;
  let fixture: ComponentFixture<CrearElectronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearElectronicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
