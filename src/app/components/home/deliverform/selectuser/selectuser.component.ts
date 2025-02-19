import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-selectuser",
  templateUrl: "./selectuser.component.html",
  styleUrls: ["./selectuser.component.css"],
})
export class SelectuserComponent {
  @Output() closeUser = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  constructor(private sharedService: SharedService) {}

  nome: string = "";
  telefone: string = "";
  email: string = "";

  saveCustomer() {
    if (this.isFormValid()) {
      const customerData = {
        tenantId: 0,
        nome: this.nome,
        telefone: this.telefone,
        listaEndereco: [], // Assuming no address is provided for now
      };

      this.sharedService.createCustomer(customerData);
      this.onCloseSelect(); // Close the select user component
    } else {
      alert("Please fill in all fields.");
    }
  }

  // Validate form fields
  isFormValid(): boolean {
    return this.nome !== "" && this.telefone !== "" && this.email !== "";
  }

  onCloseSelect() {
    this.closeUser.emit();
  }
}
