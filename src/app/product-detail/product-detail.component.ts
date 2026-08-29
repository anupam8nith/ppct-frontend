import { Component } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent, IconName } from '../icon/icon.component';
import { productIcon } from '../json-data/product-icons';
import { products } from '../json-data/product';

// Genuine on-site photos we actually have, mapped to the products they show.
// Everything else uses the icon-tile treatment rather than a mismatched
// stock photo pretending to be this specific part.
const REAL_PHOTOS: Record<number, string> = {
  1: 'assets/gallery/fan-hub-assembly.jpg',
  2: 'assets/gallery/aluminium-sprinkler.jpg',
  3: 'assets/products/pvc-fills.jpg',
  4: 'assets/products/pvc-splash-cap.jpg',
  5: 'assets/gallery/pvc-end-cap-63mm.jpg',
  6: 'assets/products/pvc-drift-eliminator.jpg',
  7: 'assets/products/industrial-tie-rod.jpg',
  8: 'assets/gallery/tie-rod-adjuster.jpg',
  9: 'assets/products/gi-pipe-clamp.jpg',
  10: 'assets/products/distribution-branch-pipe.jpg',
  11: 'assets/products/frp-louvers-flapper.jpg',
  12: 'assets/gallery/industrial-fan-blade.jpg',
  13: 'assets/products/long-shaft-motor.jpg',
  14: 'assets/products/frp-fan-canopy.jpg',
  15: 'assets/gallery/chiller-dg-installation-1.jpg',
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, EnquiryFormComponent, IconComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: Product | undefined;
  icon: IconName = 'package';
  realPhoto: string | undefined;
  related: (Product & { icon: IconName })[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe({
        next: (prod) => {
          this.product = prod;
          this.icon = productIcon(prod.id);
          this.realPhoto = REAL_PHOTOS[prod.id];
          this.related = products
            .filter((p) => p.id !== prod.id)
            .slice(0, 3)
            .map((p) => ({ ...p, icon: productIcon(p.id) }));
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        },
        error: (err) => console.error(err),
      });
    });
  }
}
