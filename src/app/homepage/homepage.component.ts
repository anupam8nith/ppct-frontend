import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  onSubmit(formData: any) {
    // Perform your logic here, e.g., send to an API, log to console, etc.
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}. We'll be in touch!`);
  }
  carouselSlides = [
    {
      imageUrl:
        'https://images.pexels.com/photos/6313464/pexels-photo-6313464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Efficient Cooling Solutions',
      description: 'Innovative technology for optimal performance.',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/6313463/pexels-photo-6313463.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Quality You Can Trust',
      description: 'Engineered for durability and reliability.',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/6313462/pexels-photo-6313462.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Customized for Your Needs',
      description: 'Tailor-made solutions for diverse industries.',
    },
  ];

  // Products (cooling towers, placeholders from Pexels)
  products = [
    {
      imageUrl:
        'https://images.pexels.com/photos/6313466/pexels-photo-6313466.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cooling Tower A',
      description:
        'High performance tower suitable for industrial applications.',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/6313465/pexels-photo-6313465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cooling Tower B',
      description: 'Compact design for space-constrained environments.',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/4589161/pexels-photo-4589161.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cooling Tower C',
      description: 'Energy-efficient and cost-effective for large facilities.',
    },
  ];

  // Clients (random people images from Pexels)
  clients = [
    {
      name: 'LG',
      logoUrl: 'assets/clients/logo-lg.svg',
    },
    {
      name: 'Pepsi',
      logoUrl: 'assets/clients/pepsi.svg',
    },
    {
      name: 'JBM Group',
      logoUrl: 'assets/clients/jbm-group.png',
    },
    {
      name: 'NHPC',
      logoUrl: 'assets/clients/nhpc.svg',
    },
    {
      name: 'Bata',
      logoUrl: 'assets/clients/bata-4.svg',
    },
    {
      name: 'JLL',
      logoUrl: 'assets/clients/jll.png',
    },
    {
      name: 'ITC',
      logoUrl: 'assets/clients/itco.png',
    },
    {
      name: 'CBRE',
      logoUrl: 'assets/clients/cbre-group.png',
    },
    {
      name: 'Escorts',
      logoUrl: 'assets/clients/escorts.svg',
    },
    {
      name: 'BILT',
      logoUrl: 'assets/clients/bilt.svg',
    },
  ];
}
