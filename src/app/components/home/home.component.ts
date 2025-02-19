import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("dropAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-20px)" }),
        animate(
          "300ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  products: any[] = [];
  filteredProducts: any[] = [];
  activeFilter: number = 0;

  ngOnInit(): void {
    this.sharedService.products$.subscribe((data) => {
      this.products = data;
      this.filteredProducts = data; // Initialize with all products
    });

    // Subscribe to the search term from the navbar
    this.sharedService.products$.subscribe(() => {
      this.filterProducts(""); // Reset filter on initial load
    });
  }

  filterProducts(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }
  }

  setActiveFilter(categoryId: number): void {
    this.activeFilter = categoryId;
    this.sharedService.fetchProducts(categoryId, 1);
  }

  bags: { id: number; orderList: any[]; isActive: boolean }[] = [
    { id: 1, orderList: [], isActive: true },
  ];
  selectedBagId: number = 1;

  // Method to add a new bag
  addBag() {
    const newBagId = this.bags.length + 1;
    this.bags.push({ id: newBagId, orderList: [], isActive: false });
  }

  // Method to remove a bag
  removeBag(index: number) {
    if (this.bags.length > 1) {
      this.bags.splice(index, 1);
      this.updateBagNumbers();
    }
  }

  // Update bag numbers after removal
  updateBagNumbers() {
    this.bags = this.bags.map((_, index) => ({ ..._, id: index + 1 }));
  }

  // Activate the selected bag and deactivate others
  selectBag(index: number) {
    this.bags.forEach((bag, i) => (bag.isActive = i + 1 === index));
  }

  getActiveBag() {
    return this.bags.find((bag) => bag.isActive);
  }
}
