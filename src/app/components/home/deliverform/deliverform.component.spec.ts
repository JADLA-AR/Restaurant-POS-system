import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverformComponent } from './deliverform.component';

describe('DeliverformComponent', () => {
  let component: DeliverformComponent;
  let fixture: ComponentFixture<DeliverformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
