import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaZonaComponent } from './tarjeta-zona.component';

describe('TarjetaZonaComponent', () => {
  let component: TarjetaZonaComponent;
  let fixture: ComponentFixture<TarjetaZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
