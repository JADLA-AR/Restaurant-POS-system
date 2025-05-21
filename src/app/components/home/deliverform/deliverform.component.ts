import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  HostListener,
} from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-deliverform",
  templateUrl: "./deliverform.component.html",
  styleUrls: ["./deliverform.component.css"],
})
export class DeliverformComponent implements OnInit {
  @Output() closeForm = new EventEmitter<void>();

  constructor(private sharedService: SharedService) {}

  activeTab: string = "delivery";

  subtotal: number = 0;
  tax: number = 0;
  serviceFee: number = 0;

  customers: any[] = [];
  addresses: any[] = [];
  paymentMethods: any[] = [];

  hasSelectedCustomer: boolean = false;
  hasSelectedPayment: boolean = false;
  selectedCustomerId: number | null = null;
  selectedCustomer: any = null;

  promoCodeInput: string = "";
  promoCodes: any[] = [];
  selectedPromoCode: string = "";
  discount: number = 0;
  totalPrice: number = this.subtotal + this.tax + this.serviceFee;

  ngOnInit(): void {
    // Subscribe to price data
    this.sharedService.subtotal$.subscribe((data) => {
      this.subtotal = data;
    });

    this.sharedService.tax$.subscribe((data) => {
      this.tax = data;
    });

    this.sharedService.serviceFee$.subscribe((data) => {
      this.serviceFee = data;
    });

    // Fetch customers once on initialization
    this.sharedService.fetchCustomers(0, 1);
    // Subscribe to customer data
    this.sharedService.customers$.subscribe((data) => {
      this.customers = data;
    });

    // Subscribe to address data
    this.sharedService.addresses$.subscribe((data) => {
      this.addresses = data;
    });

    // Subscirbe promo code
    this.promoCodes = this.sharedService.getPromoCodes();

    // Subscribe to payment method data
    this.sharedService.fetchPaymentMethods(1);
    this.sharedService.paymentMethods$.subscribe((data) => {
      this.paymentMethods = data;
    });
  }

  // customer select method
  onCustomerSelectBoxClick(): void {
    // this.sharedService.fetchCustomers(0, 1);
    this.hasSelectedCustomer = true;
  }

  // Fetch addresses when the address select box is clicked
  onAddressSelectBoxClick(): void {
    if (this.selectedCustomerId) {
      this.sharedService.fetchAddresses(this.selectedCustomerId);
    }
  }

  // Fetch addresses for the selected customer
  onCustomerSelect(customerId: string | number): void {
    this.selectedCustomerId =
      typeof customerId === "string" ? Number(customerId) : customerId;
    this.selectedCustomer = this.customers.find(
      (c) => c.id === this.selectedCustomerId
    );
    this.sharedService.fetchAddresses(this.selectedCustomerId);
  }

  // Fetch promo code
  addPromoCode() {
    this.sharedService.validatePromoCode(this.promoCodeInput).subscribe(
      (response) => {
        if (response) {
          this.selectedPromoCode = this.promoCodeInput;
          this.discount = this.sharedService.calculateDiscount(
            this.selectedPromoCode,
            this.totalPrice
          );
          console.log(this.discount);
        } else {
          alert("Invalid promo code");
        }
      },
      (error) => {
        alert("Error validating promo code");
      }
    );
  }

  // payment select method
  onPaymentSelectBoxClick(): void {
    this.hasSelectedPayment = true;
  }

  // deliver form
  showDeliverForm: boolean = false;

  onCloseDeliver() {
    this.closeForm.emit();
  }

  // select user form
  showSelectUser: boolean = false;

  onSelectUserClick() {
    this.showSelectUser = true;
  }

  onCloseSelectUser() {
    this.showSelectUser = false;
  }

  handleNewCustomer(customerData: any) {
    this.sharedService.createCustomer(customerData);
    this.onCloseSelectUser(); // Close the form after saving
  }

  // select address form
  showSelectAddress: boolean = false;

  onSelectAddressClick() {
    this.showSelectAddress = true;
  }

  onCloseSelectAddress() {
    this.showSelectAddress = false;
  }

  // place order
  showConfirmComponent: boolean = false;

  onPlaceOrder() {
    this.showConfirmComponent = true;
  }

  //Calculator effect here
  inputValue: string = "0";

  appendToInput(value: string) {
    if (this.inputValue === "0") {
      this.inputValue = value;
    } else {
      this.inputValue += value;
    }
  }

  backspace() {
    this.inputValue = this.inputValue.slice(0, -1) || "0";
  }

  confirm() {
    console.log("Confirmed value:", this.inputValue);
  }

  appendDot() {
    if (!this.inputValue.includes(".")) {
      this.inputValue += ".";
    }
  }

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if ("0123456789".includes(key)) {
      this.appendToInput(key);
    } else if (key === "Backspace") {
      this.backspace();
    } else if (key === ".") {
      this.appendDot();
    } else if (key === "Enter") {
      this.confirm();
    }
  }
}
