import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'home.component.html'
})
export class HomeComponent { }