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
import { ActivatedRoute, Router } from "@angular/router";

import { NodejsNewsService } from "../services/nodejs-news.service";
import { EditComponent } from "./edit.component";
import { of } from "rxjs";

const routerMock: any = jasmine.createSpyObj("Router", ["navigate"]);
const nodejsNewsServiceMock: any = jasmine.createSpyObj("NodejsNewsService", [
    "getArticle",
    "updateArticle"
]);

describe("EditComponent", () => {
    let component: EditComponent;
    let fixture: ComponentFixture<EditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditComponent],
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
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: {
                                get: () => {}
                            }
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        nodejsNewsServiceMock.getArticle.and.returnValue(of({}));
        nodejsNewsServiceMock.updateArticle.and.returnValue(of({}));
        fixture = TestBed.createComponent(EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
