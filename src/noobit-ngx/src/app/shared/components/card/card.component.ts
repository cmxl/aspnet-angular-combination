import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BlogPost } from "src/app/pages/blog/models/blogpost";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input() post!: BlogPost;
 }
