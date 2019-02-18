import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article.component";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ArticleComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
    exports: [ArticleComponent]
})
export class ArticleModule {}
