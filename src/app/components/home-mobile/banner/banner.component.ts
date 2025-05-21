import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  banners: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.fetchBanners();
  }

  fetchBanners() {
    this.sharedService.getBanners().subscribe(
      (response) => {
        this.banners = response;
      }
      // (error) => {
      //   console.error('Error fetching banners:', error); // Log any errors
      // }
    );
  }
}
