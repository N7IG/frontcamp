import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
} from "@angular/material";

import { EditComponent } from "./edit.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [EditComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [EditComponent]
})
export class EditModule {}
