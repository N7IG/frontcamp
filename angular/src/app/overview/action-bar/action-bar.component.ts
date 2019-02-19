import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { NewsSource } from "src/app/models/news-source.model";
import { NewsApiService } from "src/app/services/news-api.service";

import { Component, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {
    public sources$: Observable<NewsSource[]>;
    public filterField: FormControl;

    @Output() source: EventEmitter<string> = new EventEmitter<string>();
    @Output() filter: EventEmitter<string> = new EventEmitter<string>();
    @Output() createdByMeOnly: EventEmitter<boolean> = new EventEmitter<
        boolean
    >();

    constructor(private articleService: NewsApiService) {}

    public ngOnInit() {
        this.sources$ = this.articleService.getSources();
        this.filterField = new FormControl("");
    }

    public onSourceSelect(event) {
        this.source.emit(event.value);
    }

    public toggleCreatedByMe(event) {
        this.createdByMeOnly.next(event.checked);
    }

    public onFilter() {
        this.filter.next(this.filterField.value);
    }
}
