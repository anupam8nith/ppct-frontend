
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
  clientCount = 600;
  productCount = products.length;

  introParagraphs = [
    `We take this opportunity to introduce our company. P.P. Cooling Towers® has been serving the cooling tower industry, specifically to manufacture, repair and maintain cooling towers of any capacity. Beside these, we also supply genuine OEM spare parts for cooling towers.`,
    `In a continuous track record of excellence, we have rendered our services to 600+ companies across India—including industrial leaders like Jindal Steel, LG Electronics, Samsung, and Reliance—and we are proud to say that they rely on us year after year.`,
    `We have a team of dynamic, energetic and experienced people. We keep a major thrust on the punctuality of completion of assignments. Cost-wise, we are highly competitive against much older companies, so our governing philosophy is "Cost Saving with Excellence".`,
  ];

  coreFocus = [
    'Manufacturing cooling towers',
    'Repair & maintenance overhauls',
    'Aluminium fan blades (less vibration)',
    'Spare parts supply & retrofits',
    'Cost-effective, timely solutions',
  ];

  whyChooseUs = [
    'Professional & experienced engineering team',
    'Aluminium fan blades engineered for minimal vibration',
    'Dedicated & timely completion of turnkey projects',
    'ISO 9001:2015 Certified Quality Management System',
    'Customer satisfaction driven & direct manufacturer pricing',
  ];
}
