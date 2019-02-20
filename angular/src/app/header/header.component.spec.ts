import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { Router } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";

const routerMock: any = jasmine.createSpyObj("Router", ["navigate"]);

describe("HeaderComponent", () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: Router,
                    useValue: routerMock
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeDefined();
    });
});
