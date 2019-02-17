import { Observable, Subject, BehaviorSubject } from "rxjs";
import { map, scan, switchMap, tap } from "rxjs/operators";

import { Component, OnInit } from "@angular/core";

import { NewsArticle } from "../models/news-article.model";
import { NewsApiService } from "../services/news-api.service";
import { NodejsNewsService } from "../services/nodejs-news.service";

@Component({
    selector: "app-overview",
    templateUrl: "./overview.component.html",
    styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
    private noImageUrl: string = "https://i.imgur.com/uxC2Z9b.png";
    private loadMore$: Subject<Event> = new BehaviorSubject<Event>(undefined);
    private sourceSelect$: Subject<string> = new Subject<string>();
    private createdByMe$: Subject<boolean> = new Subject<boolean>();
    private pageCount: number = 1;

    public article$: Observable<NewsArticle[]>;

    constructor(
        private articleService: NewsApiService,
        private nodejsNewsService: NodejsNewsService
    ) {}

    ngOnInit() {
        // tap(a => console.log("bebe", a)),

        this.article$ = this.sourceSelect$.pipe(
            switchMap(source =>
                this.loadMore$.pipe(
                    switchMap(() =>
                        this.articleService.getEverything({
                            sources: source,
                            page: this.pageCount
                        })
                    ),
                    tap(() => this.pageCount++),
                    map(articles =>
                        articles.map(article => this.formatArticle(article))
                    ),
                    scan((pages, p) => {
                        pages = pages.concat(p);
                        return pages;
                    }, [])
                )
            )
        );
    }

    public onLoadMoreButtonClick() {
        console.log("MMM");
        this.loadMore$.next();
    }

    public onSourceSelect(source) {
        this.sourceSelect$.next(source);
    }

    public toggleCreatedByMe(byMe: boolean) {
        this.createdByMe$.next(byMe);
        this.nodejsNewsService.getArticles().subscribe();
    }

    private formatArticle(article: NewsArticle): NewsArticle {
        return {
            source: {
                id: article.source.id,
                name: article.source.name || "Anonymous"
            },
            author: article.author || "Anonymous",
            title: article.title || "No Title",
            description: article.description || "No description",
            url: article.url,
            urlToImage: article.urlToImage || this.noImageUrl,
            publishedAt: article.publishedAt,
            content: article.content || "No content"
        };
    }
}
