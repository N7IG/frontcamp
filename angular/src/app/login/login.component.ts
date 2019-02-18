import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NodejsNewsService } from "../services/nodejs-news.service";
import { Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    public userLogin: FormGroup;

    constructor(
        private fb: FormBuilder,
        private nodejsNewsService: NodejsNewsService,
        private router: Router
    ) {}

    ngOnInit() {
        this.userLogin = this.fb.group({
            login: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }

    logIn() {
        const objectToSave = {
            login: this.userLogin.get("login").value,
            password: this.userLogin.get("password").value
        };

        this.nodejsNewsService
            .logIn(objectToSave)
            .pipe(switchMap(() => this.router.navigate(["/"])))
            .subscribe();
    }
}
