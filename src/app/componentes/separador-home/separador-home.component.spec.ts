import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorHomeComponent } from './separador-home.component';

describe('SeparadorHomeComponent', () => {
  let component: SeparadorHomeComponent;
  let fixture: ComponentFixture<SeparadorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparadorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
