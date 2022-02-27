import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-watched-product-item',
  templateUrl: './watched-product-item.component.html',
  styleUrls: ['./watched-product-item.component.scss'],
})
export class WatchedProductItemComponent {
  @Input() product!: Product;
}
