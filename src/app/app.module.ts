import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button-component/button.component";
import {MapComponent} from "./map-component/map.component";

@NgModule({
    declarations: [],
    imports: [CommonModule, CommonModule, ButtonComponent, MapComponent],
    exports: []// We're not exporting anything from this module,
})
export class CesiumModule {}
