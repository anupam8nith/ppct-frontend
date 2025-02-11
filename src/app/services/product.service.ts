import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../json-data/product';

export interface Product {
  id: number;
  name: string;
  bannerImage: string;
  secondImage: string;
  description: string;
  applications: string[];
  advantages: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = products; // path to the JSON file

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next(this.productsUrl);
      observer.complete();
    });
  }

  getProductById(id: number): Observable<Product> {
    return new Observable((observer) => {
      this.getProducts().subscribe((products) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          observer.next(product);
        } else {
          observer.error('Product not found');
        }
        observer.complete();
      });
    });
  }
}
