import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-selectaddress",
  templateUrl: "./selectaddress.component.html",
  styleUrls: ["./selectaddress.component.css"],
})
export class SelectaddressComponent {
  @Output() closeAddress = new EventEmitter<void>();

  onCloseAddress() {
    this.closeAddress.emit();
  }
}
