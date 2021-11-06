import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BlogPost } from "src/app/pages/blog/models/blogpost";
import { CardDirective } from "../../directives/card.directive";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'noobit-card-container',
    templateUrl: 'card-container.component.html'
})
export class CardContainerComponent {

    private _posts$ = new BehaviorSubject<BlogPost[]>([]);
    posts$ = this._posts$.asObservable();

    @ContentChildren(CardDirective) set cards (directives: QueryList<CardDirective>) {
        const dirs = directives?.toArray() || [];
        const posts = dirs.map(x => x.post);
        this._posts$.next(posts);
    }
}