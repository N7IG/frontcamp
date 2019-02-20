import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { NewsApiService } from "./news-api.service";
import { of } from "rxjs";

const httpClientMock: any = jasmine.createSpyObj("HttpClient", ["get"]);

describe("ArticeService", () => {
    let service: NewsApiService;

    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpClientMock
                }
            ]
        })
    );

    beforeEach(() => {
        httpClientMock.get.and.returnValue(of(undefined));
        service = TestBed.get(NewsApiService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("getEverything", () => {
        const responseMock: any = {
            articles: "fakeArticles"
        };
        httpClientMock.get.and.returnValue(of(responseMock));
        service
            .getEverything()
            .subscribe(response => expect(response).toBe(<any>"fakeArticles"));
    });

    it("getTopHeadlines", () => {
        const responseMock: any = {
            articles: "fakeArticles"
        };
        httpClientMock.get.and.returnValue(of(responseMock));
        service
            .getTopHeadlines()
            .subscribe(response => expect(response).toBe(<any>"fakeArticles"));
    });

    it("getSources", () => {
        const responseMock: any = {
            sources: "fakeSources"
        };
        httpClientMock.get.and.returnValue(of(responseMock));
        service
            .getSources()
            .subscribe(response => expect(response).toBe(<any>"fakeSources"));
    });
});
