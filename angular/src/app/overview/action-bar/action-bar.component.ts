import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { NewsSource } from "src/app/models/news-source.model";
import { NewsApiService } from "src/app/services/news-api.service";

import { Component, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {
    public sources$: Observable<NewsSource[]>;

    @Output() source: EventEmitter<string> = new EventEmitter<string>();

    constructor(private articleService: NewsApiService) {}

    ngOnInit() {
        this.sources$ = this.articleService.getSources();
    }

    onSourceSelect(event) {
        this.source.emit(event.value);
    }
}
