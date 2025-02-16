import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule, FooterComponent, HeaderComponent,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor(private contactusService:ContactUsService,private fb:FormBuilder){
    this.initForm();
  }
  showAlert:boolean=false
  bannerImage =
    'https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop';

  bannerHeading = 'Get In Touch';
  bannerSubheading = 'We would love to hear from you!';

  // Info for the contact details
  addressLine =
    '144, Vipin Garden Extn, Gali No25, Uttam Nagar, NEW DELHI-110059';
  phone = '011-25355988';
  fax = '011-25355687';
  mobile = '9811890055';
  email = 'ppcoolingtowers@gmail.com';
  contactForm!:FormGroup
initForm(){
  this.contactForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone_number:['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
    message:['',Validators.required]
  })
}

  // Example form submission
  onSubmit() {
    let payload=this.contactForm.value;
    this.contactusService.sendMail(payload).subscribe(res=>{
      this.showAlert = true;
console.log(this.showAlert);
      setTimeout(() => {
        this.showAlert = false;
      }, 5000); // Hide after 5 seconds

      // Optionally reset the form
      this.contactForm.reset();
    })

    
  }
}
