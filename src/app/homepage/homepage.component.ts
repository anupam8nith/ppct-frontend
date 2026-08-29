import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
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

export interface ExplainerScene {
  id: number;
  phase: 'problem' | 'cause' | 'solution' | 'oem';
  phaseBadge: string;
  phaseBadgeColor: string;
  timeRange: string;
  headline: string;
  subtitle: string;
  image: string;
  keyPoints: string[];
  metrics: { label: string; val: string }[];
}

export const EXPLAINER_SCENES: ExplainerScene[] = [
  {
    id: 1,
    phase: 'problem',
    phaseBadge: '01. The Industrial Problem',
    phaseBadgeColor: '#ef4444',
    timeRange: '0:00 - 0:15',
    headline: 'Cooling Inefficiency, Surging Power Bills & Breakdown Risks',
    subtitle:
      'When industrial cooling towers fail, chillers overheat, head pressures surge, and factory operations face costly emergency downtime.',
    image: 'assets/gallery/compressor-chiller-unit.jpg',
    keyPoints: [
      'Elevated water approach temperatures choking chiller efficiency',
      'Sudden high-pressure compressor trips and unexpected plant stops',
      'Surging kWh electricity consumption per refrigeration ton',
    ],
    metrics: [
      { label: 'Risk Factor', val: 'Emergency Downtime' },
      { label: 'Energy Waste', val: 'Up to 25% Higher' },
    ],
  },
  {
    id: 2,
    phase: 'cause',
    phaseBadge: '02. Root Causes Identified',
    phaseBadgeColor: '#f97316',
    timeRange: '0:15 - 0:25',
    headline: 'Unbalanced Fans, Clogged Fill Media & Non-Uniform Spray',
    subtitle:
      'Mismatched third-party generic spares, warped plastic fills, and worn rotary sprinklers starve the cooling circuit of designed heat transfer.',
    image: 'assets/products/pvc-drift-eliminator.jpg',
    keyPoints: [
      'Unbalanced fan hubs causing violent motor and gearbox vibration',
      'Scaled and brittle fill blocks creating dry zones and bypass airflow',
      'Excess water drift loss (>0.2%) draining municipal and boiler makeup water',
    ],
    metrics: [
      { label: 'Vibration Impact', val: 'Premature Motor Wear' },
      { label: 'Drift Loss', val: 'Severe Water Waste' },
    ],
  },
  {
    id: 3,
    phase: 'solution',
    phaseBadge: '03. The PPCT OEM Solution',
    phaseBadgeColor: '#0ea5e9',
    timeRange: '0:25 - 0:45',
    headline: 'Precision Balanced Fans, 360° Sprinklers & Honeycomb Fills',
    subtitle:
      'Direct from our Delhi NCR facility: dynamically balanced aluminium alloy fans, 360-degree self-rotating sprinkler heads, and virgin PVC honeycomb fills.',
    image: 'assets/products/pvc-fills.jpg',
    keyPoints: [
      'Precision dynamically balanced alloy fan hub & adjustable pitch blades',
      '360° rotary sprinkler head for uniform water dispersion at low pressure',
      'Thermoformed virgin PVC cross-flute fills maximizing air-water contact',
    ],
    metrics: [
      { label: 'Thermal Surface', val: '+40% Contact Area' },
      { label: 'Dynamic Balance', val: '0% Mechanical Vibration' },
    ],
  },
  {
    id: 4,
    phase: 'oem',
    phaseBadge: '04. Turnkey Plants & Spares',
    phaseBadgeColor: '#10b981',
    timeRange: '0:45 - 0:60',
    headline: 'Turnkey Commissioning, In-Stock Spares & Direct OEM Guarantee',
    subtitle:
      'From rooftop multi-cell HVAC cooling towers to heavy DG systems, backed by 20+ years of manufacturing heritage across Delhi NCR.',
    image: 'assets/gallery/chiller-dg-rooftop-2.jpg',
    keyPoints: [
      'Turnkey HVAC chiller & diesel generator cooling tower installations',
      'Immediate stock of all 15 OEM components for rapid same-day dispatch',
      'Direct manufacturer warranty, preventive maintenance & senior engineer audits',
    ],
    metrics: [
      { label: 'Clients Served', val: '65+ Enterprises' },
      { label: 'OEM Spares', val: 'Direct Factory Stock' },
    ],
  },
];

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

  // Video Explainer state
  explainerScenes = EXPLAINER_SCENES;
  activeSceneIndex = 0;
  isPlayingExplainer = true;
  explainerInterval: any;
  showPromptModal = false;

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
    this.startExplainerAutoPlay();
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
    this.stopExplainerAutoPlay();
  }

  // Hero Slider
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
    this.startHeroSlider();
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

  @ViewChild('explainerVideo') explainerVideoRef?: ElementRef<HTMLVideoElement>;
  isVideoPlaying = false;

  // Video Explainer Methods
  startExplainerAutoPlay() {
    this.stopExplainerAutoPlay();
    this.isPlayingExplainer = true;
    this.explainerInterval = setInterval(() => {
      this.activeSceneIndex = (this.activeSceneIndex + 1) % this.explainerScenes.length;
    }, 8500);
  }

  stopExplainerAutoPlay() {
    if (this.explainerInterval) {
      clearInterval(this.explainerInterval);
      this.explainerInterval = null;
    }
  }

  toggleExplainerPlay() {
    const video = this.explainerVideoRef?.nativeElement;
    if (video) {
      if (video.paused) {
        video.play();
        this.isVideoPlaying = true;
        this.stopExplainerAutoPlay();
      } else {
        video.pause();
        this.isVideoPlaying = false;
      }
    } else {
      if (this.isPlayingExplainer) {
        this.stopExplainerAutoPlay();
        this.isPlayingExplainer = false;
      } else {
        this.startExplainerAutoPlay();
      }
    }
  }

  onVideoPlay() {
    this.isVideoPlaying = true;
    this.stopExplainerAutoPlay();
  }

  onVideoPause() {
    this.isVideoPlaying = false;
  }

  onVideoTimeUpdate(event: Event) {
    const video = event.target as HTMLVideoElement;
    if (video && video.duration) {
      const current = video.currentTime;
      if (current < 15) {
        this.activeSceneIndex = 0;
      } else if (current < 28) {
        this.activeSceneIndex = 1;
      } else if (current < 45) {
        this.activeSceneIndex = 2;
      } else {
        this.activeSceneIndex = 3;
      }
    }
  }

  setScene(index: number) {
    this.activeSceneIndex = index;
    const video = this.explainerVideoRef?.nativeElement;
    if (video) {
      const timestamps = [0, 15, 28, 45];
      video.currentTime = timestamps[index] || 0;
    }
    if (this.isPlayingExplainer && !this.isVideoPlaying) {
      this.startExplainerAutoPlay();
    }
  }

  restartExplainer() {
    this.activeSceneIndex = 0;
    const video = this.explainerVideoRef?.nativeElement;
    if (video) {
      video.currentTime = 0;
      video.play();
    } else {
      this.startExplainerAutoPlay();
    }
  }

  openPromptModal() {
    this.showPromptModal = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closePromptModal() {
    this.showPromptModal = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
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
    if (this.showPromptModal) {
      this.closePromptModal();
    }
  }
}
