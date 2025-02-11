import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-precious-clients',
  templateUrl: './precious-clients.component.html',
  styleUrls: ['./precious-clients.component.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
})
export class PreciousClientsComponent {
  bannerImage =
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop';
  // Replace with an actual image URL

  // A short introduction text about the clients
  introText = `
    We take immense pride in our association with these prestigious clients. 
    Their trust in our solutions inspires us to continually innovate and deliver 
    top-notch services. Here's a glimpse of the remarkable names who have partnered with us.
  `;

  clients = [
    { name: 'ESCORTS LTD', location: 'FARIDABAD (HARYANA)' },
    { name: 'BATA INDIA LTD', location: 'FARIDABAD (HARYANA)' },
    { name: 'LAKHANI INDIA LTD', location: 'FARIDABAD (HARYANA)' },
    { name: 'VEDRAM & SONS', location: 'SAHIBABAD  (U.P)' },
    { name: 'UNIPRODUCTS (I) LTD', location: 'NOIDA (U.P.)' },
    { name: 'SARAT PLASTIC PVT LTD.', location: 'FARIDABAD (HARYANA)' },
    { name: 'KOOL BEVERAGES', location: 'DHARUHERA (HARYANA)' },
    { name: 'HINDUSTAN VACCUMM GLASS', location: 'FARIDABAD (HARYANA)' },
    { name: 'HIND POLYMERS', location: 'GREATER NOIDA (U.P.)' },
    { name: 'VIMAL MOULDERS (I) LTD.', location: 'GURGAON (HARYANA)' },
    { name: 'HARSORIA HEALTH CARE LT', location: 'GURGAON (HARYANA)' },
    { name: 'LAKHANI SHOES LTD', location: 'BHIWADI (RAJASTHAN)' },
    { name: 'QUTAB HOTEL', location: 'NEW DELHI' },
    { name: 'V.R.M. GROUP', location: 'GURGAON (HARYANA)' },
    { name: 'BACTEL (I) LTD.', location: 'GURGAON (HARYANA)' },
    { name: 'LOGWELL FORGE LTD.', location: 'GURGAON (HARYANA)' },
    { name: 'ORIENT CRAFT LTD.', location: 'GURGAON (HARYANA)' },
    { name: 'ORIENT CLOTHING LTD.', location: 'GURGAON (HARYANA)' },
    { name: 'ISGEC', location: 'YAMUNA NAGAR (HARYANA)' },
    { name: 'BILT', location: 'YAMUNA NAGAR (HARYANA)' },
    { name: 'AMTEK INDIA LTD.', location: 'MANESER (GURGAON)' },
    { name: 'ORIENT CRAFT LTD.', location: 'MOHALI (CHANDIGARH)' },
    { name: 'SUPEREME INDUSTRIES LTD', location: 'NOIDA (U.P.)' },
    { name: 'PEPSI INDIA LTD', location: 'PANIPAT (HARYANA)' },
    { name: 'NIRVAN SERVICES', location: 'GURGAON (HARYANA)' },
    { name: 'GURGAON CENTRAL MALL', location: 'GURGAON (HARYANA)' },
    { name: 'APCO AUTO', location: 'MANESER (HARYANA)' },
    { name: 'AMTEK SICCARDI', location: 'MANESER (HARYANA)' },
    { name: 'OSWAL ELECTRICALS', location: 'FARIDABAD (HARYANA)' },
    { name: 'LAKHANI RUBBER WORKS', location: 'FARIDABAD (HARYANA)' },
    { name: 'MAHAVEER CYLINDER', location: 'SAHIBABAD (U.P.)' },
    { name: 'KRISHNA MARUTI', location: 'MANESER (HARYANA)' },
    { name: 'SONA OKEGAWA', location: 'GURGAON (HARYANA)' },
    { name: 'M. M. AQUA TECHNOLOGIES', location: 'GURGAON (HARYANA)' },
    { name: 'S. D. MOULDING', location: 'SAMANA (PUNJAB)' },
    { name: 'PIYA MOTERS', location: 'GURGAON (HARYANA)' },
    { name: 'Inter Globe Technologies', location: 'GURGAON (HARYANA)' },
    { name: 'G. D. Goenka School', location: 'NEW DELHI' },
    { name: 'Radission Hotel', location: 'Noida' },
    { name: 'Polaris', location: 'GURGAON (HARYANA)' },
    { name: 'Ciena Tower', location: 'GURGAON (HARYANA)' },
    { name: 'L.G. Electronics', location: 'GRATER NOIDA' },
    { name: 'IHDP CBRE', location: 'GRATER NOIDA' },
    { name: 'The 3C Company', location: 'GRATER NOIDA' },
    { name: 'Arvind Sports', location: 'Mangopuri Delhi' },
    { name: 'Krishna Groupo', location: 'Maneser Gurgaon' },
    { name: 'Palm Court', location: 'Gurgaon' },
    { name: 'Enkey Tower', location: 'Gurgaon' },
    { name: 'Central Mall', location: 'Gurgaon' },
    { name: 'Hilux Auto', location: 'Maneser Gurgaon' },
    { name: 'Apco Auto', location: 'NEW DELHI' },
    { name: 'Malook Chand Oil Mills', location: 'Aligarh UP' },
    { name: 'Anand Auto Company Pvt Ltd', location: 'Gurgaon' },
    { name: 'M.M.Aqua Tech.', location: 'Gurgaon' },
    { name: 'Malook Chand Cotten Mills', location: 'Aligarh UP' },
    { name: 'ITC Green', location: 'Gurgaon' },
    { name: 'Hardik India Traders', location: 'Patiyala Punjab' },
    { name: 'APS Chemomatic Pvt Ltd', location: 'Bahadurgarh Haryana' },
    { name: 'STR Labs Pvt Ltd', location: 'Maneser Gurgaon' },
    { name: 'Regent Engineering', location: 'Rurkhee UP' },
    { name: 'National Board Of Examination', location: 'NEW DELHI' },
    { name: 'D C Associate', location: 'NEW DELHI' },
    { name: 'GYS  CBRE', location: 'Noida' },
    { name: 'S P Infocity CBRE', location: 'Gurgaon' },
    { name: 'Noida Towers Pvt Ltd CBRE', location: 'Noida' },
  ];
}
