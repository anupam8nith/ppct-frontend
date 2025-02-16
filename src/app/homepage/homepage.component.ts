import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsService } from '../services/contact.service';

@Component({
  selector: 'app-homepage',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  contactForm!: FormGroup;
  showAlert:boolean=false;
  showError:boolean=false;
  constructor(private fb: FormBuilder, private contactService: ContactUsService) { 
    this.initForm()
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    })
  }
  onSubmit() {
    let payload = this.contactForm.value;
    this.contactService.sendMail(payload).subscribe( 
      next=>{
      this.showAlert = true;
      console.log(this.showAlert);
      setTimeout(() => {
        this.showAlert = false;
      }, 5000); // Hide after 5 seconds

      // Optionally reset the form
      this.contactForm.reset();
    },error=>{
      this.showError=true;
      setTimeout(() => {
        this.showError = false;
      }, 5000); // Hide after 5 seconds
    }
  )

   
  }
  carouselSlides = [
    {
      imageUrl: 'assets/carousel/carousel1.jpg',
      // 'https://images.pexels.com/photos/6313464/pexels-photo-6313464.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Efficient Cooling Solutions',
      description: 'Innovative technology for optimal performance.',
    },
    {
      imageUrl: 'assets/carousel/carousel2.jpg',
      // 'https://images.pexels.com/photos/6313463/pexels-photo-6313463.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Quality You Can Trust',
      description: 'Engineered for durability and reliability.',
    },
    {
      imageUrl: 'assets/carousel/carousel3.jpg',
      // 'https://images.pexels.com/photos/6313462/pexels-photo-6313462.jpeg?auto=compress&cs=tinysrgb&w=1600',
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
