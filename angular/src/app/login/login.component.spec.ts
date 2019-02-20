import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { NodejsNewsService } from "../services/nodejs-news.service";
import { LoginComponent } from "./login.component";

const routerMock: any = jasmine.createSpyObj("Router", ["navigate"]);
const nodejsNewsServiceMock: any = jasmine.createSpyObj("NodejsNewsService", [
    "addArticle"
]);

describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                FormBuilder,
                {
                    provide: Router,
                    useValue: routerMock
                },
                {
                    provide: NodejsNewsService,
                    useValue: nodejsNewsServiceMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
