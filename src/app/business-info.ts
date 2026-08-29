// Single source of truth for business contact details used across the site.
export const BUSINESS = {
  name: 'P.P. Cooling Towers®',
  addressLine: '144, Vipin Garden Extn, Gali No. 25, Uttam Nagar, New Delhi-110059',
  phone: '011-25355988',
  mobile: '9811890055',
  mobileDisplay: '+91-98118 90055',
  email: 'ppcoolingtowers@gmail.com',
  whatsappNumber: '919811890055', // country code + number, no symbols
  // TODO: replace with the real company LinkedIn URL once provided.
  linkedinUrl: '',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
