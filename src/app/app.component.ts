import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappFabComponent } from './whatsapp-fab/whatsapp-fab.component';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhatsappFabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ppct-frontend';

  constructor(private seo: SeoService) {
    this.seo.init();
  }
}
