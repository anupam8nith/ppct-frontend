import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PreciousClientsComponent } from './precious-clients/precious-clients.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    data: {
      title: 'Cooling Tower Manufacturing, Repair & Maintenance',
      description:
        'P.P. Cooling Towers® manufactures, repairs and maintains industrial cooling towers of any capacity across India, and supplies genuine spare parts. Trusted by 600+ enterprises like Jindal, LG, Samsung, and Reliance.',
    },
  },
  {
    path: 'products',
    component: ProductPageComponent,
    data: {
      title: 'Products',
      description:
        'Minimal-vibration aluminium fan sets, PVC fills, drift eliminators, tie rods and more. Browse our full cooling tower product and OEM spare parts catalog.',
    },
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'precious-clients',
    component: PreciousClientsComponent,
    data: {
      title: 'Precious Clients',
      description:
        'Jindal, LG, Samsung, Reliance, Escorts, Bata, Pepsi, NHPC, and 600+ other businesses across India trust P.P. Cooling Towers®.',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About Us',
      description:
        'P.P. Cooling Towers® manufactures, repairs and maintains cooling towers across India. Cost saving, with excellence.',
    },
  },
  {
    path: 'contact',
    component: ContactUsComponent,
    data: {
      title: 'Contact Us',
      description:
        'Get in touch with P.P. Cooling Towers® for a new installation, repair, maintenance or spare parts order.',
    },
  },
];
