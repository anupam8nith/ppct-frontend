import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { IconComponent } from '../icon/icon.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { clients } from '../json-data/clients';

@Component({
  selector: 'app-precious-clients',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EnquiryFormComponent, IconComponent, FormsModule, RouterModule],
  templateUrl: './precious-clients.component.html',
  styleUrl: './precious-clients.component.scss',
})
export class PreciousClientsComponent {
  bannerImage = 'assets/slide3.jpg';
  clients = clients;
  search = '';

  get filtered() {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.clients;
    return this.clients.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
    );
  }
}
