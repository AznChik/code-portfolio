import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  public chosenProduct: string = '';
  public showProduct: boolean = false;

  public refresh(): void {
    window.location.reload();
  }

  public toProduct(selection: string): void {
    this.chosenProduct = selection;
    this.showProduct = true;
  }
}
