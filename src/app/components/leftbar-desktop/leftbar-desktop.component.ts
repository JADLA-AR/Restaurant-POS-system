import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-leftbar-desktop",
  templateUrl: "./leftbar-desktop.component.html",
  styleUrls: ["./leftbar-desktop.component.css"],
})
export class LeftbarDesktopComponent {
  constructor(private sharedService: SharedService, private eRef: ElementRef) {}

  activeTab: string = "Home";

  // Method to handle tab clicks
  onTabClick(tab: string): void {
    this.sharedService.setActiveTab(tab);
    if (this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  // In order to make hamburger menu
  // isMobile: boolean = false;
  isMobile: boolean = window.innerWidth < 800;
  isMenuOpen: boolean = false;
  menuPosition = { top: "0px", left: "0px" };

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener("window:resize", ["$event"])
  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 800;
    if (!this.isMobile) {
      this.isMenuOpen = false; // Reset menu state when resizing to desktop
    }
  }

  toggleNav(event?: MouseEvent): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (event) {
      const button = event.target as HTMLElement;
      const rect = button.getBoundingClientRect();
      this.menuPosition = {
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
      };
    }
  }
  onResize() {
    this.isMobile = window.innerWidth < 800;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }
  onClickOutside(event: Event) {
    if (
      this.isMobile &&
      this.isMenuOpen &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.isMenuOpen = false;
    }
  }
  @ViewChild("sidePanel") sidePanel!: ElementRef;
}
