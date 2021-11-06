import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { BlogPost } from "../models/blogpost";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {
    
    constructor(private activatedRoute: ActivatedRoute) { }

    posts$: Observable<BlogPost[]> = of([]);

    ngOnInit(): void {
        this.posts$ = this.activatedRoute.data
            .pipe(map(x => x['posts'] as BlogPost[] || []));
    }
}
