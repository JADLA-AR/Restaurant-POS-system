import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { DeliverlistComponent } from "../deliverlist/deliverlist.component";

@Component({
  selector: "app-pending",
  templateUrl: "./pending.component.html",
  styleUrls: ["./pending.component.css"],
})
export class PendingComponent {
  deliverList: any[] = new Array(5);

  get deliveryPendingCount(): number {
    return this.deliverList.length;
  }
}
