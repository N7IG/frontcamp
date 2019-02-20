import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleComponent } from "./article.component";
import { NodejsNewsService } from "src/app/services/nodejs-news.service";

const nodejsNewsServiceMock: any = jasmine.createSpyObj("NodejsNewsService", [
    "deleteArticle"
]);

describe("ArticleComponent", () => {
    let component: ArticleComponent;
    let fixture: ComponentFixture<ArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticleComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: NodejsNewsService,
                    useValue: nodejsNewsServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
