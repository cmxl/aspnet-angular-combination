import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule {}