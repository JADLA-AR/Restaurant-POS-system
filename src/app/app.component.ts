import { Component } from "@angular/core";
import { SharedService } from "./services/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeTab: string = "home";

  constructor(private sharedService: SharedService) {
    this.sharedService.activeTab$.subscribe((tab) => {
      this.activeTab = tab;
    });
  }

  // Search event
  onSearch(keyword: string): void {
    if (this.activeTab === "home") {
      this.sharedService.productsSubject.next(
        this.sharedService.productsSubject.getValue()
      );
      this.sharedService.filterProducts(keyword).subscribe((filtered) => {
        this.sharedService.productsSubject.next(filtered);
      });
    }
  }
}
