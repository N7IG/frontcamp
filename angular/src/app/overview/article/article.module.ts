import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article.component";
import { MatCardModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ArticleComponent]
})
export class ArticleModule {}
