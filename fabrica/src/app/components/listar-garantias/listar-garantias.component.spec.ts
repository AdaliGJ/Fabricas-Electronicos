import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGarantiasComponent } from './listar-garantias.component';

describe('ListarGarantiasComponent', () => {
  let component: ListarGarantiasComponent;
  let fixture: ComponentFixture<ListarGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGarantiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
