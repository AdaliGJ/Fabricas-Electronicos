import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarElectronicosComponent } from './listar-electronicos.component';

describe('ListarElectronicosComponent', () => {
  let component: ListarElectronicosComponent;
  let fixture: ComponentFixture<ListarElectronicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarElectronicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarElectronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
