import { Component, OnInit, Input } from "@angular/core";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  @Input() products: any[] = [];
  orderList: any[] = [];
  totalPrice: number = 0;
  serviceFee: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.orderList$.subscribe((orderList) => {
      this.orderList = orderList;
      this.calculateTotalPrice();
      this.updateServiceFee();
    });
  }
  calculateTotalPrice() {
    this.totalPrice = this.orderList.reduce(
      (acc, product) => acc + product.price * product.ordernumber,
      0
    );
    const tax = this.totalPrice / 100; // Assuming tax is 1%
    this.sharedService.setPrices(this.totalPrice, tax, this.serviceFee);
  }

  updateServiceFee() {
    this.serviceFee = this.orderList.length > 0 ? 1 : 0;
    this.sharedService.setPrices(
      this.totalPrice,
      this.totalPrice / 100,
      this.serviceFee
    );
  }

  clearOrderList() {
    this.orderList = [];
    this.totalPrice = 0;
    this.serviceFee = 0;
    this.sharedService.clearThumbnail();
    this.sharedService.updateOrderList([]);
  }

  removeOrderList(product: any) {
    const index = this.orderList.indexOf(product);
    if (index > -1) {
      if (this.orderList[index].ordernumber === 1) {
        this.orderList.splice(index, 1);
      } else {
        this.orderList[index].ordernumber--;
      }
      this.calculateTotalPrice();
      this.sharedService.updateOrderList(this.orderList);
    }
  }

  // deliver form
  showDeliverForm: boolean = false;

  onOrderClick() {
    this.showDeliverForm = true;
  }
  onCloseDeliverForm() {
    this.showDeliverForm = false;
  }
}
