import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { OverviewComponent } from "./overview/overview.component";
import { PreviewComponent } from "./preview/preview.component";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent },
    { path: "create", component: CreateComponent },
    { path: "preview/:id", component: PreviewComponent },
    { path: "edit", component: EditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
