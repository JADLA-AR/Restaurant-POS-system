import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderidComponent } from './orderid.component';

describe('OrderidComponent', () => {
  let component: OrderidComponent;
  let fixture: ComponentFixture<OrderidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
