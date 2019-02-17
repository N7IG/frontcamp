import { NewsArticle } from "./news-article.model";

export interface GetEverythingResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}
