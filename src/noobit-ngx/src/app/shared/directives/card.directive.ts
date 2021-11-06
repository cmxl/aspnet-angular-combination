import { Directive, Input } from "@angular/core";
import { BlogPost } from "src/app/pages/blog/models/blogpost";

@Directive({
    selector: 'noobitCard'
})
export class CardDirective {
    @Input() post!: BlogPost;
}