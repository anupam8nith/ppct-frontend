import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { BUSINESS, whatsappLink } from '../business-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  business = BUSINESS;
  year = new Date().getFullYear();
  whatsappHref = whatsappLink("Hi, I'd like to enquire about your cooling tower products/services.");
}
