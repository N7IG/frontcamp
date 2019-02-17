import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { ActionBarModule } from "./action-bar/action-bar.module";
import { ArticleModule } from "./article/article.module";
import { OverviewComponent } from "./overview.component";
import { SourceNameModule } from "./source-name/source-name.module";

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        CommonModule,
        SourceNameModule,
        ActionBarModule,
        ArticleModule,
        MatButtonModule
    ],
    exports: [OverviewComponent]
})
export class OverviewModule {}
