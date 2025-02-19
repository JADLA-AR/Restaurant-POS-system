import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { FiltermenuComponent } from "./filtermenu.component";

describe("FiltermenuComponent", () => {
  let component: FiltermenuComponent;
  let fixture: ComponentFixture<FiltermenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FiltermenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
