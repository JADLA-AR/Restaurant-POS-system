import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodalComponent } from './addmodal.component';

describe('AddmodalComponent', () => {
  let component: AddmodalComponent;
  let fixture: ComponentFixture<AddmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
