import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { NewsArticle } from "../models/news-article.model";
import { GetTopHeadlinesResponse } from "../models/get-top-headlines-response.model";
import { GetTopHeadlinesRequest } from "../models/get-top-headlines-request.model";
import { GetEverythingResponse } from "../models/get-everything-response.model";
import { GetEverythingRequest } from "../models/get-everything-request.model";
import { NewsSource } from "../models/news-source.model";
import { GetSourcesRequest } from "../models/get-sources-request.model";
import { GetSourcesResponse } from "../models/get-sources-response.model";

@Injectable({
    providedIn: "root"
})
export class NewsApiService {
    private urlBase: string = "https://newsapi.org/v2/";
    private apiKey: string = "37bf6eba9005457ca4209b9169ea3828";

    constructor(private http: HttpClient) {}

    public getTopHeadlines(
        options?: GetTopHeadlinesRequest
    ): Observable<NewsArticle[]> {
        const endpoint = "top-headlines";

        let params: HttpParams = this.getHttpParams(options);

        return this.http
            .get<GetTopHeadlinesResponse>(this.urlBase + endpoint, {
                params: params
            })
            .pipe(map(response => response.articles));
    }

    public getEverything(
        options?: GetEverythingRequest
    ): Observable<NewsArticle[]> {
        const endpoint = "everything";

        let params: HttpParams = this.getHttpParams(options);

        return this.http
            .get<GetEverythingResponse>(this.urlBase + endpoint, {
                params: params
            })
            .pipe(map(response => response.articles));
    }

    public getSources(options?: GetSourcesRequest): Observable<NewsSource[]> {
        const endpoint = "sources";

        let params: HttpParams = this.getHttpParams(options);

        return this.http
            .get<GetSourcesResponse>(this.urlBase + endpoint, {
                params: params
            })
            .pipe(map(response => response.sources));
    }

    private getHttpParams(options?: any): HttpParams {
        let params = new HttpParams();

        if (options) {
            Object.keys(options).forEach(function(item) {
                params = params.set(item, options[item]);
            });
        }

        params = params.set("apiKey", this.apiKey);

        return params;
    }
}
