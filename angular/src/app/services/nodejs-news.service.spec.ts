import { TestBed } from "@angular/core/testing";

import { NodejsNewsService } from "./nodejs-news.service";
import { HttpClient } from "@angular/common/http";

const httpClientMock: any = jasmine.createSpyObj("HttpClient", [
    "get",
    "post",
    "put",
    "delete"
]);

describe("NodejsNewsService", () => {
    let service: NodejsNewsService;

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
        service = TestBed.get(NodejsNewsService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("getArticles should perform get request", () => {
        service.getArticles();
    });

    it("getArticle should perform get request", () => {
        const id: string = "fake-id";
        service.getArticle(id);

        expect(httpClientMock.get).toHaveBeenCalled();
    });

    it("deleteArticle should perform delete request", () => {
        const id: string = "fake-id";
        service.deleteArticle(id);

        expect(httpClientMock.delete).toHaveBeenCalled();
    });

    it("addArticle should perform post request", () => {
        const request: any = {};
        service.addArticle(request);

        expect(httpClientMock.post).toHaveBeenCalled();
    });

    it("addArticle should perform put request", () => {
        const request: any = {};
        service.updateArticle(request);

        expect(httpClientMock.put).toHaveBeenCalled();
    });

    it("addArticle should perform post request", () => {
        const logInRequest: any = {
            login: "login",
            password: "password"
        };
        service.logIn(logInRequest);

        expect(httpClientMock.post).toHaveBeenCalled();
    });
});
