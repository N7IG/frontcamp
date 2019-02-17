import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
