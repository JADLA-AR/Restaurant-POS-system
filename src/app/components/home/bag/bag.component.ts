import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.css"],
})
export class BagComponent {
  @Input() bagNumber!: number;
  @Output() close = new EventEmitter<void>();
  @Input() isActive!: boolean;
  @Output() select = new EventEmitter<void>();

  closeBag() {
    this.close.emit();
  }

  selectBag() {
    this.select.emit();
  }
}
