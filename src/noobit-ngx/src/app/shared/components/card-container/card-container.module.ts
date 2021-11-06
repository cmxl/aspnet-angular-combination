import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardDirective } from "../../directives/card.directive";
import { ChunkPipeModule } from "../../pipes/chunk.pipe";
import { CardModule } from "../card/card.module";
import { CardContainerComponent } from "./card-container.component";

@NgModule({
    declarations: [
        CardDirective,
        CardContainerComponent
    ],
    imports: [
        CardModule,
        CommonModule,
        ChunkPipeModule
    ],
    exports: [
        CardDirective,
        CardContainerComponent
    ]
})
export class CardContainerModule {}