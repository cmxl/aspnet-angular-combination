import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { BlogPost } from "../models/blogpost";

@Injectable()
export class BlogPostsResolver implements Resolve<BlogPost[]> {

    constructor(private http: HttpClient) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BlogPost[] | Observable<BlogPost[]> | Promise<BlogPost[]> {

        const blog = route.paramMap.get('blog');
        const topic = route.paramMap.get('topic');
        
        if(topic){
            return this.http.get<BlogPost[]>(`https://www.noobit.dev/api/blog/${blog}/${topic}/posts`);
        }

        return this.http.get<BlogPost[]>(`https://www.noobit.dev/api/blog/${blog}/overview`);
    }

}
