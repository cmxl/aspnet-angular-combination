import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent { }