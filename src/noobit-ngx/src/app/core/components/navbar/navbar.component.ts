import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'noobit-navbar',
    styleUrls: ['navbar.component.scss'],
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent { 

    isNavbarMenuActive$ = new BehaviorSubject(false);

    toggleNavbarMenu(): void {
        this.isNavbarMenuActive$.next(!this.isNavbarMenuActive$.value);
    }
}
