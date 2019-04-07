import { Component } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test-library";

  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    this.message.info("This is a normal message");
  }
}
