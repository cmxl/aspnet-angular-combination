import { Topic } from "./topic";

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    markdown?: any;
    date: Date;
    topic: Topic;
    seoTitle: string;
}

