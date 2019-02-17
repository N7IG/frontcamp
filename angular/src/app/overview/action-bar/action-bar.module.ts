import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatButtonModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ActionBarComponent } from "./action-bar.component";

@NgModule({
    declarations: [ActionBarComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [ActionBarComponent]
})
export class ActionBarModule {}
