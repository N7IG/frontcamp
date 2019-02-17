import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSelectModule, MatToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ActionBarComponent } from "./action-bar.component";

@NgModule({
    declarations: [ActionBarComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatToolbarModule
    ],
    exports: [ActionBarComponent]
})
export class ActionBarModule {}
