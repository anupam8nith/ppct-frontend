import { Component, Input } from '@angular/core';


export type IconName =
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'menu'
  | 'close'
  | 'chevron-right'
  | 'chevron-left'
  | 'arrow-right'
  | 'arrow-left'
  | 'eye'
  | 'check'
  | 'building'
  | 'wrench'
  | 'package'
  | 'clock'
  | 'fan'
  | 'layers'
  | 'disc'
  | 'shield-check'
  | 'shield'
  | 'download'
  | 'rod'
  | 'clamp'
  | 'pipe'
  | 'valve'
  | 'gear'
  | 'roof'
  | 'users'
  | 'whatsapp'
  | 'linkedin'
  | 'fax'
  | 'send'
  | 'play'
  | 'pause'
  | 'refresh-cw'
  | 'search';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      >
      <ng-container>
        @switch (name) {
          @case ('phone') {
            <ng-container>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </ng-container>
          }
          @case ('mail') {
            <ng-container>
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
            </ng-container>
          }
          @case ('map-pin') {
            <ng-container>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
            </ng-container>
          }
          @case ('menu') {
            <ng-container>
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </ng-container>
          }
          @case ('close') {
            <ng-container>
              <path d="M18 6 6 18M6 6l12 12"/>
            </ng-container>
          }
          @case ('chevron-right') {
            <ng-container>
              <path d="m9 18 6-6-6-6"/>
            </ng-container>
          }
          @case ('chevron-left') {
            <ng-container>
              <path d="m15 18-6-6 6-6"/>
            </ng-container>
          }
          @case ('eye') {
            <ng-container>
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </ng-container>
          }
          @case ('arrow-right') {
            <ng-container>
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </ng-container>
          }
          @case ('arrow-left') {
            <ng-container>
              <path d="M19 12H5M11 18l-6-6 6-6"/>
            </ng-container>
          }
          @case ('check') {
            <ng-container>
              <path d="M20 6 9 17l-5-5"/>
            </ng-container>
          }
          @case ('building') {
            <ng-container>
              <path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/>
            </ng-container>
          }
          @case ('wrench') {
            <ng-container>
              <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19v3h3l7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z"/>
            </ng-container>
          }
          @case ('package') {
            <ng-container>
              <path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
            </ng-container>
          }
          @case ('clock') {
            <ng-container>
              <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
            </ng-container>
          }
          @case ('fan') {
            <ng-container>
              <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>
              <path d="M12 12c0-3.5 2-6.5 4.5-6.5S19 8 16.5 10.2C15 11.4 12 12 12 12z"/>
              <path d="M12 12c3.5 0 6.5 2 6.5 4.5S16 19 13.8 16.5C12.6 15 12 12 12 12z"/>
              <path d="M12 12c-3.5 0-6.5-2-6.5-4.5S8 5 10.2 7.5C11.4 9 12 12 12 12z"/>
              <path d="M12 12c0 3.5-2 6.5-4.5 6.5S5 16 7.5 13.8C9 12.6 12 12 12 12z"/>
            </ng-container>
          }
          @case ('layers') {
            <ng-container>
              <rect x="4" y="4" width="16" height="4" rx="1"/><rect x="4" y="10" width="16" height="4" rx="1"/><rect x="4" y="16" width="16" height="4" rx="1"/>
            </ng-container>
          }
          @case ('disc') {
            <ng-container>
              <circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/>
            </ng-container>
          }
          @case ('shield-check') {
            <ng-container>
              <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/>
            </ng-container>
          }
          @case ('shield') {
            <ng-container>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </ng-container>
          }
          @case ('download') {
            <ng-container>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </ng-container>
          }
          @case ('rod') {
            <ng-container>
              <path d="M4 20L20 4"/><circle cx="4" cy="20" r="2.2"/><circle cx="20" cy="4" r="2.2"/><path d="M9 15l1.5 1.5M13 11l1.5 1.5"/>
            </ng-container>
          }
          @case ('clamp') {
            <ng-container>
              <rect x="5" y="9" width="14" height="7" rx="1.5"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/>
            </ng-container>
          }
          @case ('pipe') {
            <ng-container>
              <path d="M4 8h9a4 4 0 0 1 4 4v0"/><path d="M17 8v8"/><circle cx="4" cy="8" r="2"/><circle cx="17" cy="16" r="2"/>
            </ng-container>
          }
          @case ('valve') {
            <ng-container>
              <circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
            </ng-container>
          }
          @case ('gear') {
            <ng-container>
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z"/>
            </ng-container>
          }
          @case ('roof') {
            <ng-container>
              <path d="M3 12 12 4l9 8"/><path d="M5 10v10h14V10"/>
            </ng-container>
          }
          @case ('users') {
            <ng-container>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </ng-container>
          }
          @case ('fax') {
            <ng-container>
              <rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M7 9V4h10v5"/><circle cx="17" cy="14.5" r="1.2" fill="currentColor" stroke="none"/><path d="M7 14h6"/>
            </ng-container>
          }
          @case ('send') {
            <ng-container>
              <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
            </ng-container>
          }
          @case ('search') {
            <ng-container>
              <circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>
            </ng-container>
          }
          @case ('play') {
            <ng-container>
              <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none"/>
            </ng-container>
          }
          @case ('pause') {
            <ng-container>
              <rect x="6" y="4" width="4" height="16" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" fill="currentColor" stroke="none"/>
            </ng-container>
          }
          @case ('refresh-cw') {
            <ng-container>
              <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
            </ng-container>
          }
          @case ('whatsapp') {
            <ng-container>
              <path
                fill="currentColor"
                stroke="none"
                d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.18h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.19 8.19 0 1 1 6.97 3.84zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z"
                />
            </ng-container>
          }
          @case ('linkedin') {
            <ng-container>
              <path
                fill="currentColor"
                stroke="none"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z"
                />
            </ng-container>
          }
        }
      </ng-container>
    </svg>
    `,
})
export class IconComponent {
  @Input() name: IconName = 'check';
  @Input() size = 20;
}
