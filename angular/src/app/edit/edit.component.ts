import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NodejsNewsService } from "../services/nodejs-news.service";
import { switchMap, tap } from "rxjs/operators";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
    public articleForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private nodejsNewsService: NodejsNewsService,
        private router: Router
    ) {}

    public ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");

        this.articleForm = this.fb.group({
            title: [{ value: "", disabled: true }],
            description: ["", [Validators.required]],
            urlToImage: ["", [Validators.required]],
            content: ["", [Validators.required]]
        });

        this.nodejsNewsService
            .getArticle(id)
            .pipe(
                tap(a => console.log("LLL", a)),
                tap(response => this.fillFields(response))
            )
            .subscribe();
    }

    public onSave() {
        const objectToSave = {
            id: this.articleForm.get("title").value.replace(/ /g, "-"),
            title: this.articleForm.get("title").value,
            description: this.articleForm.get("description").value,
            urlToImage: this.articleForm.get("urlToImage").value,
            content: this.articleForm.get("content").value
        };

        this.nodejsNewsService
            .updateArticle(objectToSave)
            .pipe(switchMap(() => this.router.navigate(["/"])))
            .subscribe();
    }

    private fillFields(response: any) {
        this.articleForm.get("title").patchValue(response.title);
        this.articleForm.get("description").patchValue(response.description);
        this.articleForm.get("urlToImage").patchValue(response.urlToImage);
        this.articleForm.get("content").patchValue(response.content);
    }
}
