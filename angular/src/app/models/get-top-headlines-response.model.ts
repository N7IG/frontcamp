import { NewsArticle } from "./news-article.model";

export interface GetTopHeadlinesResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}
