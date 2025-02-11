import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  bannerImage =
    'https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop';

  bannerHeading = 'Get In Touch';
  bannerSubheading = 'We would love to hear from you!';

  // Info for the contact details
  addressLine =
    '144, Vipin Garden Extn, Gali No25, Uttam Nagar, NEW DELHI-110059';
  phone = '011-25355988';
  fax = '011-25355687';
  mobile = '9811890055';
  email = 'ppcoolingtowers@gmail.com';

  // Example form submission
  onSubmit(formData: any) {
    alert(`Form submitted by: ${formData.name}`);
    console.log('Form data:', formData);
  }
}
