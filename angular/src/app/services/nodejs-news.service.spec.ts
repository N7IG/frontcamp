import { TestBed } from "@angular/core/testing";

import { NodejsNewsService } from "./nodejs-news.service";
import { HttpClient } from "@angular/common/http";

const httpClientMock: any = jasmine.createSpyObj("HttpClient", ["get"]);

describe("NodejsNewsService", () => {
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
        const service: NodejsNewsService = TestBed.get(NodejsNewsService);
        expect(service).toBeTruthy();
    });
});
