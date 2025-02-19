import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"],
})
export class DeliveryComponent {
  showOrderDetail: boolean = false;

  onOrderDetailShow() {
    this.showOrderDetail = true;
  }
  onCloseOrderDetail() {
    this.showOrderDetail = false;
  }
}
