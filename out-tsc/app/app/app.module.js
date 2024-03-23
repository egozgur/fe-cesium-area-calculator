import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CesiumDirective } from "./cesiumComponents/cesium.directive";
let CesiumModule = class CesiumModule {
};
CesiumModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, CesiumDirective],
        exports: [], // We're not exporting anything from this module
    })
], CesiumModule);
export { CesiumModule };
//# sourceMappingURL=app.module.js.map