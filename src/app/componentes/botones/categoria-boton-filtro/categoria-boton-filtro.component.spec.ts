import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBotonFiltroComponent } from './categoria-boton-filtro.component';

describe('CategoriaBotonFiltroComponent', () => {
  let component: CategoriaBotonFiltroComponent;
  let fixture: ComponentFixture<CategoriaBotonFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaBotonFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaBotonFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
