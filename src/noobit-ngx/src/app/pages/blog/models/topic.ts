import { Blog } from "./blog";

export interface Topic {
    id: string;
    blog: Blog;
    name: string;
    seoName: string;
}
