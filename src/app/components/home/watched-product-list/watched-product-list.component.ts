import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { WatchedProdcutsService } from 'src/app/shared/services/watched-prodcuts.service';

@Component({
  selector: 'app-watched-product-list',
  templateUrl: './watched-product-list.component.html',
  styleUrls: ['./watched-product-list.component.scss'],
})
export class WatchedProductListComponent implements OnInit {
  watchedProducts: Product[] = [];

  constructor(private watchedProdcutsService: WatchedProdcutsService) {}

  ngOnInit(): void {
    this.watchedProdcutsService.all().subscribe((products) => {
      this.watchedProducts = products;
    });
  }
}
