import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVideoSectionComponent } from './hero-video-section.component';

describe('HeroVideoSectionComponent', () => {
  let component: HeroVideoSectionComponent;
  let fixture: ComponentFixture<HeroVideoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroVideoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
