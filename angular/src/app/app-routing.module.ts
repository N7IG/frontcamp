import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { OverviewComponent } from "./overview/overview.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: OverviewComponent },
    { path: "create", component: CreateComponent },
    { path: "login", component: LoginComponent },
    { path: "edit/:id", component: EditComponent },
    { path: "edit", component: EditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
