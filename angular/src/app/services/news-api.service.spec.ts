import { TestBed } from "@angular/core/testing";

import { NewsApiService } from "./news-api.service";

describe("ArticeService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: NewsApiService = TestBed.get(NewsApiService);
        expect(service).toBeTruthy();
    });
});
