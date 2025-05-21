import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarDesktopComponent } from './leftbar-desktop.component';

describe('LeftbarDesktopComponent', () => {
  let component: LeftbarDesktopComponent;
  let fixture: ComponentFixture<LeftbarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbarDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
