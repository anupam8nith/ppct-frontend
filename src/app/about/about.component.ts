import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  bannerImage =
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop';

  // Main heading / short text on the banner
  bannerHeading = 'P.P. Cooling Towers';
  bannerSubheading = 'Leading the Way in Efficient Cooling Solutions';

  // Intro text: lines from your message
  introParagraphs = [
    `Greetings from P.P. Cooling Towers!`,
    `We take this opportunity to introduce our company. The P.P. Cooling Tower is now in the area of cooling tower industry. Specifically, we Manufacture, Repair and maintain cooling towers with any capacity. Beside these, we also provide the spare parts of cooling towers.`,
    `In the very short regime, we have rendered our service to numerous companies of Delhi and NCR. And we are very proud to say that many of them are much satisfied and exultant with our dedicated works.`,
    `We have a team of dynamic, energetic and experienced people. We keep major thrust on the punctuality of the completion of Assignment. Cost wise, we are highly competitive to the older companies. So the abstract is “Cost Saving with Excellence”.`,
    `So it’s a humble request to you and your company from P.P.Cooling Towers and its working team that give us a pleasure to work for you and make good Business term.`,
    `We look forward to a longstanding mutually beneficial relationship.`,
  ];

  // Closing lines (signature, etc.)
  signature = `Yours sincerely,
For P.P.COOLING TOWERS

Paritosh Kumar`;
}
