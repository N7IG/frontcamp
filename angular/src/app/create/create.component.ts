import { Component, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { NodejsNewsService } from "../services/nodejs-news.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
    public newArticleForm = this.fb.group({
        title: ["", [Validators.required]],
        description: ["", [Validators.required]],
        urlToImage: ["", [Validators.required]],
        content: ["", [Validators.required]]
    });

    constructor(
        private fb: FormBuilder,
        private nodejsNewsService: NodejsNewsService
    ) {}

    ngOnInit() {}

    onSave() {
        const objectToSave = {
            id: this.newArticleForm.get("title").value.replace(/ /g, "-"),
            title: this.newArticleForm.get("title").value,
            description: this.newArticleForm.get("description").value,
            urlToImage: this.newArticleForm.get("urlToImage").value,
            content: this.newArticleForm.get("content").value
        };

        this.nodejsNewsService.putArticle(objectToSave);
    }
}
