import { Component, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-leftbar",
  templateUrl: "./leftbar.component.html",
  styleUrls: ["./leftbar.component.css"],
})
export class LeftbarComponent {
  constructor(private sharedService: SharedService) {}

  activeTab: string = "home";

  // Method to handle tab clicks
  onTabClick(tab: string): void {
    this.sharedService.setActiveTab(tab);
  }
}
