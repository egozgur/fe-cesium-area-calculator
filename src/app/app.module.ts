import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CesiumDirective } from "./cesiumComponents/cesium.directive";

@NgModule({
    declarations: [],// Declarations array is empty because we only export CesiumDirective
    imports: [CommonModule, CesiumDirective],
    exports: [],// We're not exporting anything from this module
})
export class CesiumModule {}
