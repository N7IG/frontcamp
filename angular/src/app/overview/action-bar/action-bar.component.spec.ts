import { NewsApiService } from "src/app/services/news-api.service";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActionBarComponent } from "./action-bar.component";

const newsApiServiceMock: any = jasmine.createSpyObj("NewsApiService", [
    "getSources"
]);

describe("ActionBarComponent", () => {
    let component: ActionBarComponent;
    let fixture: ComponentFixture<ActionBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ActionBarComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: NewsApiService,
                    useValue: newsApiServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
