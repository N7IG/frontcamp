import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { GetEverythingResponse } from "../models/get-everything-response.model";
import { NewsArticle } from "../models/news-article.model";
import { PutArticleRequest } from "../models/put-article-request.model";

@Injectable({
    providedIn: "root"
})
export class NodejsNewsService {
    private urlBase: string = "http://localhost:3000/";

    constructor(private http: HttpClient) {}

    public getArticles(): Observable<NewsArticle[]> {
        const endpoint = "news";

        return this.http
            .get<GetEverythingResponse>(this.urlBase + endpoint)
            .pipe(
                tap(response => console.log(response)),
                map(response => response.articles)
            );
    }

    public putArticle(request: PutArticleRequest): void {
        const endpoint = "news/" + request.id;

        this.http.put<GetEverythingResponse>(this.urlBase + endpoint, request);
    }
}
