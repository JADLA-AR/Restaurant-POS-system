import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail-mobile-hor",
  templateUrl: "./thumbnail-mobile-hor.component.html",
  styleUrls: ["./thumbnail-mobile-hor.component.css"],
})
export class ThumbnailMobileHorComponent {
  products: any[] = [];
  // isFavorite: boolean = false;

  // toggleFavorite() {
  //   this.isFavorite = !this.isFavorite;
  // }

  @Input() product: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.products$.subscribe((data) => {
      this.products = data;
    });
  }
  // set product thumbnail data when click this
  onThumbnailClick(product: any) {
    const thumbnailData = {
      productId: product.id,
      image: product.urlFotoProduto,
      title: product.nome,
      stock: product.estoqueInicial,
      price: product.precoVenda,
      description: product.descricao,
    };
    this.sharedService.setThumbnail(thumbnailData);
  }
}
