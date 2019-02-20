import { switchMap } from "rxjs/operators";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { NodejsNewsService } from "../services/nodejs-news.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
    public newArticleForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private nodejsNewsService: NodejsNewsService,
        private router: Router
    ) {}

    ngOnInit() {
        this.newArticleForm = this.fb.group({
            title: ["", [Validators.required]],
            description: ["", [Validators.required]],
            urlToImage: ["", [Validators.required]],
            content: ["", [Validators.required]]
        });
    }

    onSave() {
        const objectToSave = {
            id: this.newArticleForm.get("title").value.replace(/ /g, "-"),
            title: this.newArticleForm.get("title").value,
            description: this.newArticleForm.get("description").value,
            urlToImage: this.newArticleForm.get("urlToImage").value,
            content: this.newArticleForm.get("content").value
        };

        this.nodejsNewsService
            .addArticle(objectToSave)
            .pipe(switchMap(() => this.router.navigate(["/"])))
            .subscribe();
    }
}
