import { NgModule } from "@angular/core";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./components/blog.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CardContainerModule } from "src/app/shared/components/card-container/card-container.module";
import { BlogPostsResolver } from "./services/blogposts.resolver";

@NgModule({
    declarations: [
        BlogComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        HttpClientModule,
        CardContainerModule
    ],
    providers: [
        BlogPostsResolver
    ]
})
export class BlogModule { }