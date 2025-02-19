import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LeftbarComponent } from "./components/leftbar/leftbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FiltermenuComponent } from "./components/home/filtermanu/filtermenu.component";
import { ThumbnailComponent } from "./components/home/thumbnail/thumbnail.component";
import { BagComponent } from "./components/home/bag/bag.component";
import { ProductComponent } from "./components/home/product/product.component";
import { OrderlistComponent } from "./components/home/product/orderlist/orderlist.component";
import { AddmodalComponent } from "./components/home/addmodal/addmodal.component";
import { DeliverformComponent } from "./components/home/deliverform/deliverform.component";
import { SelectuserComponent } from "./components/home/deliverform/selectuser/selectuser.component";
import { SelectaddressComponent } from "./components/home/deliverform/selectaddress/selectaddress.component";
import { ConfirmComponent } from "./components/home/deliverform/confirm/confirm.component";
import { CashComponent } from "./components/cash/cash.component";
import { DeliveryComponent } from './components/delivery/delivery.component';
import { TableComponent } from './components/table/table.component';
import { PendingComponent } from './components/delivery/pending/pending.component';
import { ConfirmedComponent } from './components/delivery/confirmed/confirmed.component';
import { SentComponent } from './components/delivery/sent/sent.component';
import { CancelledComponent } from './components/delivery/cancelled/cancelled.component';
import { DeliveredComponent } from './components/delivery/delivered/delivered.component';
import { DeliverlistComponent } from './components/delivery/deliverlist/deliverlist.component';
import { OrderdetailComponent } from './components/delivery/orderdetail/orderdetail.component';
import { OrderidComponent } from './components/delivery/orderid/orderid.component';
import { CompositionComponent } from './components/delivery/composition/composition.component';
import { SelcardComponent } from './components/table/selcard/selcard.component';
import { EntryComponent } from './components/cash/entry/entry.component';
import { CashlistComponent } from './components/cash/cashlist/cashlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    HomeComponent,
    FiltermenuComponent,
    ThumbnailComponent,
    BagComponent,
    ProductComponent,
    OrderlistComponent,
    AddmodalComponent,
    DeliverformComponent,
    SelectuserComponent,
    SelectaddressComponent,
    ConfirmComponent,
    CashComponent,
    DeliveryComponent,
    TableComponent,
    PendingComponent,
    ConfirmedComponent,
    SentComponent,
    CancelledComponent,
    DeliveredComponent,
    DeliverlistComponent,
    OrderdetailComponent,
    OrderidComponent,
    CompositionComponent,
    SelcardComponent,
    EntryComponent,
    CashlistComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
