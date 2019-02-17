import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "source-name",
  templateUrl: "./source-name.component.html",
  styleUrls: ["./source-name.component.css"]
})
export class SourceNameComponent implements OnInit {
  @Input() public sourceName: string;

  constructor() {}

  ngOnInit() {}
}
