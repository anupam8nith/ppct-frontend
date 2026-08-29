
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactUsService } from '../services/contact.service';
import { IconComponent } from '../icon/icon.component';
import { BUSINESS, whatsappLink } from '../business-info';

/**
 * Shared enquiry / contact form used on the homepage, product detail,
 * products listing and contact pages. One form, one validation set, one
 * place to fix bugs, instead of four near-duplicate copies.
 */
@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.scss',
})
export class EnquiryFormComponent {
  /** 'dark' renders light text/inputs for use on navy/photo backgrounds. */
  @Input() variant: 'light' | 'dark' = 'light';
  @Input() showMessage = false;
  @Input() messageRequired = false;
  /** Optional context, e.g. a product name, folded into the submitted message. */
  @Input() context = '';
  @Input() ctaLabel = 'Request a Call';
  @Input() showWhatsapp = true;
  @Input() whatsappMessage = "Hi, I'd like to enquire about your cooling tower products/services.";

  showAlert = false;
  showError = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactUsService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone_number: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  ngOnChanges(): void {
    const messageCtrl = this.form.get('message');
    if (!messageCtrl) return;
    messageCtrl.setValidators(this.messageRequired ? [Validators.required] : []);
    messageCtrl.updateValueAndValidity({ emitEvent: false });
  }

  get whatsappHref(): string {
    const msg = this.context
      ? `Hi, I'd like to enquire about: ${this.context}`
      : this.whatsappMessage;
    return whatsappLink(msg);
  }

  get mailHref(): string {
    const subject = this.context
      ? `Enquiry: ${this.context}`
      : 'Enquiry from website';
    return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}`;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = {
      ...this.form.value,
      ...(this.context ? { product: this.context } : {}),
    };
    this.contactService.sendMail(payload).subscribe({
      next: () => {
        this.showAlert = true;
        this.form.reset();
        setTimeout(() => (this.showAlert = false), 5000);
      },
      error: () => {
        this.showError = true;
        setTimeout(() => (this.showError = false), 5000);
      },
    });
  }
}
