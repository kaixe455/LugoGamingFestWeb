import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadosComponent } from './invitados.component';

describe('InvitadosComponent', () => {
  let component: InvitadosComponent;
  let fixture: ComponentFixture<InvitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
