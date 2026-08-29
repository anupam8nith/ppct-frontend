import { Component } from '@angular/core';
import { Product, ProductService } from '../services/product.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent, IconName } from '../icon/icon.component';
import { productIcon } from '../json-data/product-icons';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    EnquiryFormComponent,
    IconComponent
],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  bannerImage = 'assets/slide2.jpg';
  products: (Product & { icon: IconName })[] = [];
  search = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map((p) => ({ ...p, icon: productIcon(p.id) }));
    });
  }

  get filtered() {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.products;
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }
}
