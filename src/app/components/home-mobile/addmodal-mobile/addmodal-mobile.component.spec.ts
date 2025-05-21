import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodalMobileComponent } from './addmodal-mobile.component';

describe('AddmodalMobileComponent', () => {
  let component: AddmodalMobileComponent;
  let fixture: ComponentFixture<AddmodalMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodalMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmodalMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
