import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { ActionBarComponent } from "./action-bar.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ActionBarComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [ActionBarComponent]
})
export class ActionBarModule {}
