import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";

import { NodejsNewsService } from "../services/nodejs-news.service";
import { CreateComponent } from "./create.component";

const routerMock: any = jasmine.createSpyObj("Router", ["navigate"]);
const nodejsNewsServiceMock: any = jasmine.createSpyObj("NodejsNewsService", [
    "addArticle"
]);

describe("CreateComponent", () => {
    let component: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateComponent],
            imports: [
                BrowserAnimationsModule,
                MatButtonModule,
                MatCardModule,
                MatFormFieldModule,
                MatOptionModule,
                MatSelectModule,
                MatInputModule,
                ReactiveFormsModule
            ],
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
        fixture = TestBed.createComponent(CreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
