import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelcardComponent } from './selcard.component';

describe('SelcardComponent', () => {
  let component: SelcardComponent;
  let fixture: ComponentFixture<SelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
