
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent } from '../icon/icon.component';
import { BUSINESS } from '../business-info';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, EnquiryFormComponent, IconComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  business = BUSINESS;
  bannerImage = 'assets/slide0.jpg';
  mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url =
      'https://maps.google.com/maps?q=' +
      encodeURIComponent(BUSINESS.addressLine) +
      '&output=embed';
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
