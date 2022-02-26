import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerZonaComponent } from './ver-zona.component';

describe('VerZonaComponent', () => {
  let component: VerZonaComponent;
  let fixture: ComponentFixture<VerZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
