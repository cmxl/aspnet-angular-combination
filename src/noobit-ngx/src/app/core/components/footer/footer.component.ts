import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent { 
    year = new Date().getFullYear();
}