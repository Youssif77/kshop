import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProdcutsService } from 'src/app/shared/services/prodcuts.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private prodcutsService: ProdcutsService) {}

  ngOnInit(): void {
    this.prodcutsService
      .all()
      .subscribe((products) => (this.products = products));
  }
}
