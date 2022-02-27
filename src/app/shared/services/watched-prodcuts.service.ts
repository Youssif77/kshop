import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment.prod';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root',
})
export class WatchedProdcutsService {
  private model = 'watched-products';

  constructor(private http: HttpClient) {}

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getUrl());
  }

  getUrl() {
    return `${env.BASE_URL}/${this.model}.json`;
  }
}
