import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./components/blog.component";
import { BlogPostsResolver } from "./services/blogposts.resolver";

const routes: Routes = [
    { path: ':blog/:topic', component: BlogComponent, resolve: { posts: BlogPostsResolver }, pathMatch: 'full' },
    { path: ':blog', component: BlogComponent, resolve: { posts: BlogPostsResolver }, pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }