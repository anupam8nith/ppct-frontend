import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent } from '../icon/icon.component';
import { products } from '../json-data/product';
import { productIcon } from '../json-data/product-icons';
import { clients as allClients } from '../json-data/clients';
import { galleryItems, GalleryItem } from '../json-data/gallery-data';
import { BUSINESS } from '../business-info';

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
  constructor(private route: ActivatedRoute) {}

  business = BUSINESS;

  heroImages = [
    'assets/gallery/chiller-dg-rooftop-2.jpg',
    'assets/gallery/factory-plant.jpg',
    'assets/gallery/chiller-dg-installation-1.jpg',
    'assets/carousel/carousel1.jpg',
    'assets/carousel/carousel2.jpg',
    'assets/carousel/carousel3.jpg',
  ];
  currentHeroIndex = 0;
  heroInterval: any;

  aboutImage = 'assets/gallery/factory-plant.jpg';

  productCount = products.length;
  featuredProducts = products.slice(0, 6).map((p) => ({
    ...p,
    icon: productIcon(p.id),
  }));

  // Gallery state
  gallery = galleryItems;
  activeCategory: 'All' | 'Installations' | 'Components' | 'Facility' = 'All';
  activeLightboxItem: GalleryItem | null = null;

  clients = [
    { name: 'LG Electronics', logoUrl: 'assets/clients/logo-lg.svg' },
    { name: 'PepsiCo', logoUrl: 'assets/clients/pepsi.svg' },
    { name: 'Escorts Group', logoUrl: 'assets/clients/escorts.svg' },
    { name: 'Bata India', logoUrl: 'assets/clients/bata-4.svg' },
    { name: 'Lakhani Footwear', logoUrl: 'assets/clients/lakhani.jpg' },
    { name: 'ITC Limited', logoUrl: 'assets/clients/itco.png' },
    { name: 'JBM Group', logoUrl: 'assets/clients/jbm-group.png' },
    { name: 'Indian Ordnance Factory', logoUrl: 'assets/clients/ordnance-factory.jpg' },
    { name: 'NHPC Limited', logoUrl: 'assets/clients/nhpc.svg' },
    { name: 'BILT Paper', logoUrl: 'assets/clients/bilt.svg' },
    { name: 'JLL India', logoUrl: 'assets/clients/jll.png' },
    { name: 'CBRE Group', logoUrl: 'assets/clients/cbre-group.png' },
    { name: 'ISGEC Heavy Engineering', logoUrl: 'assets/clients/isgec.svg' },
    { name: 'Supreme Industries', logoUrl: 'assets/clients/supreme.svg' },
    { name: 'Radisson Hotels', logoUrl: 'assets/clients/radisson.svg' },
    { name: 'Krishna Maruti', logoUrl: 'assets/clients/krishna-maruti.svg' },
    { name: 'Uniproducts India', logoUrl: 'assets/clients/uniproducts.svg' },
    { name: 'Sona Okegawa', logoUrl: 'assets/clients/sona-group.svg' },
  ];

  clientCount = allClients.length;

  ngOnInit() {
    this.startHeroSlider();
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        setTimeout(() => {
          if (typeof document !== 'undefined') {
            const el = document.getElementById(frag);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 150);
      }
    });
  }

  ngOnDestroy() {
    this.stopHeroSlider();
  }

  startHeroSlider() {
    this.stopHeroSlider();
    this.heroInterval = setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 5000);
  }

  stopHeroSlider() {
    if (this.heroInterval) {
      clearInterval(this.heroInterval);
      this.heroInterval = null;
    }
  }

  setHero(index: number) {
    this.currentHeroIndex = index;
    this.startHeroSlider(); // reset timer
  }

  prevHero() {
    this.currentHeroIndex =
      (this.currentHeroIndex - 1 + this.heroImages.length) % this.heroImages.length;
    this.startHeroSlider();
  }

  nextHero() {
    this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    this.startHeroSlider();
  }

  // Gallery methods
  setCategory(cat: 'All' | 'Installations' | 'Components' | 'Facility') {
    this.activeCategory = cat;
  }

  get filteredGallery(): GalleryItem[] {
    if (this.activeCategory === 'All') {
      return this.gallery;
    }
    return this.gallery.filter((item) => item.category === this.activeCategory);
  }

  openLightbox(item: GalleryItem) {
    this.activeLightboxItem = item;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    this.activeLightboxItem = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    if (this.activeLightboxItem) {
      this.closeLightbox();
    }
  }
}
