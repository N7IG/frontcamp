import { Pipe, PipeTransform } from "@angular/core";
import { NewsArticle } from "src/app/models/news-article.model";

@Pipe({ name: "titleFilter" })
export class TitleFilterPipe implements PipeTransform {
    transform(articles: NewsArticle[], filterString: string): NewsArticle[] {
        console.log(articles);
        if (articles && filterString) {
            return articles.filter(article =>
                article.title.includes(filterString)
            );
        }
        return articles;
    }
}
