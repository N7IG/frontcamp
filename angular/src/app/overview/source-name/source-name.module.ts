import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SourceNameComponent } from "./source-name.component";

@NgModule({
  declarations: [SourceNameComponent],
  imports: [CommonModule],
  exports: [SourceNameComponent]
})
export class SourceNameModule {}
