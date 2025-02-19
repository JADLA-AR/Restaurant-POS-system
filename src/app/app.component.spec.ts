import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FiltermenuComponent } from "./components/home/filtermanu/filtermenu.component";
import { ThumbnailComponent } from "./components/home/thumbnail/thumbnail.component";
import { BagComponent } from "./components/home/bag/bag.component";
import { OrderlistComponent } from "./components/home/product/orderlist/orderlist.component";
import { AddmodalComponent } from "./components/home/addmodal/addmodal.component";
import { DeliverformComponent } from "./components/home/deliverform/deliverform.component";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        LeftbarComponent,
        HomeComponent,
        FiltermenuComponent,
        ThumbnailComponent,
        BagComponent,
        OrderlistComponent,
        AddmodalComponent,
        DeliverformComponent,
      ],
    }).compileComponents();
  }));

  it("should create the app", waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app");
  }));
});
