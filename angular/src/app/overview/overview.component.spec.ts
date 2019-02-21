import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewsArticle } from "../models/news-article.model";
import { NewsApiService } from "../services/news-api.service";
import { NodejsNewsService } from "../services/nodejs-news.service";
import { newsArticleMather } from "../test-matchers/index";
import { OverviewComponent } from "./overview.component";

@Pipe({ name: "titleFilter" })
class MockTitleFilterPipe implements PipeTransform {
    transform(value: number): number {
        return value;
    }
}

const newsApiServiceMock: any = jasmine.createSpyObj("NewsApiService", [
    "getEverything"
]);
const nodejsNewsServiceMock: any = jasmine.createSpyObj("NodejsNewsService", [
    "getArticles"
]);

describe("OverviewComponent", () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewComponent, MockTitleFilterPipe],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: NodejsNewsService,
                    useValue: nodejsNewsServiceMock
                },
                {
                    provide: NewsApiService,
                    useValue: newsApiServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        jasmine.addMatchers(newsArticleMather);
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("formatArticle should return NewsArticle", () => {
        const fakeArticle: NewsArticle = {
            source: {
                id: "id",
                name: undefined
            },
            author: undefined,
            title: undefined,
            description: undefined,
            url: "url",
            urlToImage: undefined,
            publishedAt: new Date(),
            content: undefined
        };

        let result: any = component.formatArticle(fakeArticle);

        expect(result).toBeNewsArticle();
    });
});
