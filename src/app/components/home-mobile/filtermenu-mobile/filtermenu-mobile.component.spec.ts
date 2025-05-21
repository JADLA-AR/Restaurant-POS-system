import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermenuMobileComponent } from './filtermenu-mobile.component';

describe('FiltermenuMobileComponent', () => {
  let component: FiltermenuMobileComponent;
  let fixture: ComponentFixture<FiltermenuMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltermenuMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltermenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
