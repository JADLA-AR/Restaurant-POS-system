import { Component, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  @Output() searchKeyword = new EventEmitter<string>();
  isMobile: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.isMobile$.subscribe((mobileStatus) => {
      this.isMobile = mobileStatus;
    });
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchKeyword.emit(input.value);
  }
}
