import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { OverviewModule } from "./overview/overview.module";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { EditModule } from "./edit/edit.module";
import { HttpClientModule } from "@angular/common/http";
import { PreviewModule } from "./preview/preview.module";
import { CreateModule } from "./create/create.module";
import { LoginModule } from "./login/login.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OverviewModule,
        FooterModule,
        HeaderModule,
        EditModule,
        PreviewModule,
        HttpClientModule,
        CreateModule,
        LoginModule
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
