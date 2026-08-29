import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent } from '../icon/icon.component';
import { products } from '../json-data/product';
import { productIcon } from '../json-data/product-icons';
import { clients as allClients } from '../json-data/clients';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    EnquiryFormComponent,
    IconComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit, OnDestroy {
  heroImages = [
    'assets/carousel/carousel1.jpg',
    'assets/carousel/carousel2.jpg',
    'assets/carousel/carousel3.jpg'
  ];
  currentHeroIndex = 0;
  heroInterval: any;

  aboutImage = 'assets/carousel/carousel2.jpg';

  ngOnInit() {
    this.startHeroSlider();
  }

  ngOnDestroy() {
    if (this.heroInterval) {
      clearInterval(this.heroInterval);
    }
  }

  startHeroSlider() {
    this.heroInterval = setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 5000);
  }

  productCount = products.length;
  featuredProducts = products.slice(0, 6).map((p) => ({
    ...p,
    icon: productIcon(p.id),
  }));

  clients = [
    { name: 'LG', logoUrl: 'assets/clients/logo-lg.svg' },
    { name: 'Pepsi', logoUrl: 'assets/clients/pepsi.svg' },
    { name: 'JBM Group', logoUrl: 'assets/clients/jbm-group.png' },
    { name: 'NHPC', logoUrl: 'assets/clients/nhpc.svg' },
    { name: 'Bata', logoUrl: 'assets/clients/bata-4.svg' },
    { name: 'JLL', logoUrl: 'assets/clients/jll.png' },
    { name: 'ITC', logoUrl: 'assets/clients/itco.png' },
    { name: 'CBRE', logoUrl: 'assets/clients/cbre-group.png' },
    { name: 'Escorts', logoUrl: 'assets/clients/escorts.svg' },
    { name: 'BILT', logoUrl: 'assets/clients/bilt.svg' },
  ];

  clientCount = allClients.length;
}
