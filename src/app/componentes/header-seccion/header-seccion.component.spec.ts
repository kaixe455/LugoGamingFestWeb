import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeccionComponent } from './header-seccion.component';

describe('HeaderSeccionComponent', () => {
  let component: HeaderSeccionComponent;
  let fixture: ComponentFixture<HeaderSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
