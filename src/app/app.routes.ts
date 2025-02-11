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
  },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'precious-clients', component: PreciousClientsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
];
