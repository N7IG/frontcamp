import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
    @Input() public title;
    @Input() public date;
    @Input() public source;
    @Input() public content;
    @Input() public imgUrl;

    constructor() {}

    ngOnInit() {}
}
