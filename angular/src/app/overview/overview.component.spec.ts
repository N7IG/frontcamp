import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OverviewComponent } from "./overview.component";
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from "@angular/core";
import { NodejsNewsService } from "../services/nodejs-news.service";
import { NewsApiService } from "../services/news-api.service";

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
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
