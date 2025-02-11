import { Component } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (prod) => (this.product = prod),
      error: (err) => console.error(err),
    });
  }
}
