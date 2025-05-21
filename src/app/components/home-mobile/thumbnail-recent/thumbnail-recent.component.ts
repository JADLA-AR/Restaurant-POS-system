import { Component, Input } from "@angular/core";
import { SharedService } from "app/services/shared.service";

@Component({
  selector: "app-thumbnail-recent",
  templateUrl: "./thumbnail-recent.component.html",
  styleUrls: ["./thumbnail-recent.component.css"],
})
export class ThumbnailRecentComponent {
  products: any[] = [];

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
