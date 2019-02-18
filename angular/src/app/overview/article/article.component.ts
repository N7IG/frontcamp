import { Component, Input } from "@angular/core";
import { NodejsNewsService } from "src/app/services/nodejs-news.service";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"]
})
export class ArticleComponent {
    @Input() public title;
    @Input() public id;
    @Input() public date;
    @Input() public source;
    @Input() public content;
    @Input() public imgUrl;
    @Input() public isPersonal;

    constructor(private nodejsNewsService: NodejsNewsService) {}

    public onDelete() {
        this.nodejsNewsService.deleteArticle(this.id).subscribe();
    }
}
