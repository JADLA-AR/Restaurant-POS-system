import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashlistComponent } from './cashlist.component';

describe('CashlistComponent', () => {
  let component: CashlistComponent;
  let fixture: ComponentFixture<CashlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
