import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

const SITE_NAME = 'P.P. Cooling Towers';

/**
 * Walks the activated route tree on every navigation and applies that
 * route's `title`/`description` data to the document. The SPA had a single
 * static <title> before this; every page now gets its own for search and
 * for browser tabs/bookmarks.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {}

  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route) => {
        route.data.subscribe((data) => {
          const pageTitle = data['title'] ? `${data['title']} | ${SITE_NAME}` : SITE_NAME;
          this.titleService.setTitle(pageTitle);
          if (data['description']) {
            this.meta.updateTag({ name: 'description', content: data['description'] });
          }
        });
      });
  }
}
