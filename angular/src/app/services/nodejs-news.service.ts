import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { GetEverythingResponse } from "../models/get-everything-response.model";
import { NewsArticle } from "../models/news-article.model";
import { LoginRequest } from "../models/login-request.model";

@Injectable({
    providedIn: "root"
})
export class NodejsNewsService {
    private urlBase: string = "http://localhost:3000/";

    constructor(private http: HttpClient) {}

    public getArticles(): Observable<NewsArticle[]> {
        const endpoint = "news";

        return this.http.get<any>(this.urlBase + endpoint);
    }

    public getArticle(id: string): Observable<NewsArticle[]> {
        const endpoint = "news/" + id;

        return this.http.get<any>(this.urlBase + endpoint);
    }

    public addArticle(request: any): Observable<any> {
        const endpoint = "news";

        request.publishedAt = new Date().toISOString();
        request.source = {
            name: "Me"
        };

        return this.http.post<any>(this.urlBase + endpoint, request);
    }

    public updateArticle(request: any): Observable<any> {
        const endpoint = "news/" + request.id;

        request.publishedAt = new Date().toISOString();
        request.source = {
            name: "Me"
        };

        return this.http.put<any>(this.urlBase + endpoint, request);
    }

    public deleteArticle(id: string): Observable<any> {
        const endpoint = "news/" + id;

        return this.http.delete<any>(this.urlBase + endpoint);
    }

    public logIn(request: LoginRequest): Observable<any> {
        const endpoint = "login";

        return this.http.post<GetEverythingResponse>(
            this.urlBase + endpoint,
            request
        );
    }
}
