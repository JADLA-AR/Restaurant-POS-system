import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectuserComponent } from './selectuser.component';

describe('SelectuserComponent', () => {
  let component: SelectuserComponent;
  let fixture: ComponentFixture<SelectuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
