import { NgModule } from "@angular/core";
import { FormatCodeComponent } from "./format-code.component";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: [FormatCodeComponent],
  exports: [FormatCodeComponent]
})
export class FormatCodeModule {}
