import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { chunk } from "src/app/core/services/chunk";
import { BlogPost } from "src/app/pages/blog/models/blogpost";

@Pipe({
    name: 'chunk'
})
export class ChunkPipe implements PipeTransform {
    transform(value: unknown[] | null, chunkSize: number) {
        if(value == null) return [];
        return chunk(value, chunkSize);
    }
}

@NgModule({
    declarations: [ChunkPipe],
    exports: [ChunkPipe]
})
export class ChunkPipeModule {

}