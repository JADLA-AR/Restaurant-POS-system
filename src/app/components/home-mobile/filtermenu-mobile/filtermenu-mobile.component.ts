import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-filtermenu-mobile",
  templateUrl: "./filtermenu-mobile.component.html",
  styleUrls: ["./filtermenu-mobile.component.css"],
})
export class FiltermenuMobileComponent {
  activeFilter: number = 0;
  products: any[] = [];
  categories: any[] = [];
  errorMessage: string = "";

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.setActiveFilterToAll();
    this.fetchCategories(1);
    this.sharedService.categories$.subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error("Error in subscription:", error);
      }
    );
  }

  fetchCategories(tenantId: number): void {
    this.sharedService.fetchCategories(tenantId);
  }
  setActiveFilterToAll(): void {
    this.activeFilter = 0;
    this.sharedService.fetchProducts(0, 1);
  }
  setActiveFilter(categoryId: number): void {
    this.activeFilter = categoryId;
    this.sharedService.fetchProducts(categoryId, 1);
  }
}
document.querySelectorAll(".filter span").forEach((span) => {
  span.addEventListener("click", function () {
    // Remove active class from all spans
    document
      .querySelectorAll(".filter span")
      .forEach((s) => s.classList.remove("filter-menu-active"));

    // Add active class to the clicked span
    this.classList.add("filter-menu-active");
  });
});
