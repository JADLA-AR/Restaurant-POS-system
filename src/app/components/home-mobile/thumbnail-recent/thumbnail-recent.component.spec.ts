import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailRecentComponent } from './thumbnail-recent.component';

describe('ThumbnailRecentComponent', () => {
  let component: ThumbnailRecentComponent;
  let fixture: ComponentFixture<ThumbnailRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
