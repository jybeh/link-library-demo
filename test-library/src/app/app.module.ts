import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormatCodeModule } from "format-code";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormatCodeModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
