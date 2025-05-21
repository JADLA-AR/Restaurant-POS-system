import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailMobileHorComponent } from './thumbnail-mobile-hor.component';

describe('ThumbnailMobileHorComponent', () => {
  let component: ThumbnailMobileHorComponent;
  let fixture: ComponentFixture<ThumbnailMobileHorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailMobileHorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailMobileHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
