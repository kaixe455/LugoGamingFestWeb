import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasHomeComponent } from './zonas-home.component';

describe('ZonasHomeComponent', () => {
  let component: ZonasHomeComponent;
  let fixture: ComponentFixture<ZonasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
