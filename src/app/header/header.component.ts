import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { BUSINESS, whatsappLink } from '../business-info';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  business = BUSINESS;
  mobileOpen = false;
  whatsappHref = whatsappLink("Hi, I'd like to enquire about your cooling tower products/services.");

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }
}
