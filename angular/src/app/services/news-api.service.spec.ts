import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { NewsApiService } from "./news-api.service";

const httpClientMock: any = jasmine.createSpyObj("HttpClient", ["get"]);

describe("ArticeService", () => {
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

    it("should be created", () => {
        const service: NewsApiService = TestBed.get(NewsApiService);
        expect(service).toBeTruthy();
    });
});
