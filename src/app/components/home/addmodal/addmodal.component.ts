import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-addmodal",
  templateUrl: "./addmodal.component.html",
  styleUrls: ["./addmodal.component.css"],
})
export class AddmodalComponent implements OnInit {
  @Input() selectedBagId!: number;
  @Output() productAdded = new EventEmitter<void>();
  constructor(private sharedService: SharedService) {}

  thumbnailData: any;
  product: any;
  selectedSizeValue: number = 0;
  productId: number = 1;

  ngOnInit(): void {
    this.sharedService.thumbnail$.subscribe((data) => {
      this.thumbnailData = data;
      if (data && data.productId) {
        this.loadProductDetails(data.productId);
      }
    });
  }

  // method to display detailed extra data of product
  loadProductDetails(productId: number): void {
    this.sharedService.getProductDetails(productId).subscribe((data) => {
      this.product = data;
      if (this.product.listaComplementos) {
        this.product.listaComplementos.forEach((complemento: any) => {
          complemento.qtd = 0;
        });
      }
      if (
        this.product &&
        this.product.listaTamanhos &&
        this.product.listaTamanhos.length > 0
      ) {
        this.selectedSizeValue = this.product.listaTamanhos[0].valor; // Set default selected value
        this.updateThumbnailPrice();
      }
    });
  }

  onSizeChange(event: any): void {
    const selectedSize = event.target.value;
    const size = this.product.listaTamanhos.find(
      (s: any) => s.tamanho.toLowerCase() === selectedSize.toLowerCase()
    );
    if (size) {
      this.selectedSizeValue = size.valor; // Update selected size value
      this.updateThumbnailPrice();
    }
  }

  setProductId(id: number): void {
    this.productId = id;
    this.loadProductDetails(id);
  }

  updateThumbnailPrice(): void {
    if (!this.product) return;

    let basePrice = this.product.precoVenda || 0;
    let sizePrice = this.selectedSizeValue || 0;

    const selectedIngredientsPrice = (
      this.product.listaComplementos || []
    ).reduce((total: number, complemento: any) => {
      return total + (complemento.preco * complemento.qtd || 0);
    }, 0);

    const finalPrice = basePrice + sizePrice + selectedIngredientsPrice;

    this.thumbnailData.price = finalPrice;

    this.productAdded.emit();
  }

  onCheckboxChange(complemento: any, isChecked: boolean): void {
    complemento.qtd = isChecked ? 1 : 0;
    this.updateThumbnailPrice();
  }
  // add to orderlist
  onAddClick() {
    if (this.thumbnailData) {
      const selectedComplementos = this.product.listaComplementos.filter(
        (complemento: any) => complemento.qtd > 0
      );

      const newProduct = {
        ...this.thumbnailData,
        ordernumber: this.ordernumber,
        ingredient_number: this.ingredient_number,
        complementos: selectedComplementos,
      };
      this.sharedService.addToOrderList(newProduct);
    }

    if (this.product && this.product.listaComplementos) {
      this.product.listaComplementos.forEach((complemento: any) => {
        complemento.qtd = 0;
      });
    }
    this.sharedService.clearThumbnail();
    this.ordernumber = 1;
    this.ingredient_number = 1;
  }
  closeModal() {
    this.sharedService.clearThumbnail();
  }

  // order number
  ordernumber: number = 1;
  decrementorder() {
    if (this.ordernumber > 1) {
      this.ordernumber--;
    }
  }

  incrementorder() {
    this.ordernumber++;
  }

  //ingredient number
  ingredient_number: number = 1;
  decrementIngredient(complemento: any): void {
    if (complemento.qtd > 1) {
      complemento.qtd -= 1;
      this.updateThumbnailPrice();
    }
  }

  incrementingredient(complemento: any) {
    complemento.qtd++;
    this.updateThumbnailPrice();
  }
}
