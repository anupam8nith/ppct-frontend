import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { whatsappLink } from '../business-info';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [IconComponent],
  template: `
    <a
      class="wa-fab"
      [href]="href"
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <app-icon name="whatsapp" [size]="28"></app-icon>
    </a>
  `,
  styleUrl: './whatsapp-fab.component.scss',
})
export class WhatsappFabComponent {
  href = whatsappLink("Hi, I'd like to enquire about your cooling tower products/services.");
}
