import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'noobit-root',
  template: `
    <noobit-navbar></noobit-navbar>
    <noobit-header></noobit-header>
    <section [ngClass]="{'section': !(isHomePage$ | async)}">
      <router-outlet></router-outlet>
    </section>
    <noobit-footer></noobit-footer>
  `,
  styles: [`
    section {
      flex: 1;
    }
  `]
})
export class AppComponent { 

  isHomePage$: Observable<boolean> = of(true);
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isHomePage$ = this.router.events
      .pipe(
        filter((x): x is NavigationEnd => x instanceof NavigationEnd),
        map(x => x.urlAfterRedirects === '/'),
        shareReplay({refCount: true, bufferSize: 1}));
  }
}
