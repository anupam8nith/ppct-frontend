
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent } from '../icon/icon.component';
import { clients } from '../json-data/clients';
import { products } from '../json-data/product';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, EnquiryFormComponent, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  bannerImage = 'assets/carousel/carousel2.jpg';
  clientCount = clients.length;
  productCount = products.length;

  introParagraphs = [
    `We take this opportunity to introduce our company. P.P. Cooling Towers has been serving the cooling tower industry, specifically to manufacture, repair and maintain cooling towers of any capacity. Beside these, we also supply the spare parts for cooling towers.`,
    `In a short span, we have rendered our service to numerous companies across Delhi and NCR, and we are proud to say that many of them are satisfied and delighted with our dedicated work.`,
    `We have a team of dynamic, energetic and experienced people. We keep a major thrust on the punctuality of completion of assignments. Cost-wise, we are highly competitive against much older companies, so the abstract is "Cost Saving with Excellence".`,
  ];

  coreFocus = [
    'Manufacturing cooling towers',
    'Repair & maintenance',
    'Spare parts supply',
    'Cost-effective, timely solutions',
  ];

  whyChooseUs = [
    'Professional & experienced team',
    'Dedicated & timely completion of projects',
    'Competitive costs',
    'Customer satisfaction driven',
  ];
}
