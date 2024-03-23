import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button-component/button.component";
import { MapComponent } from "./map-component/map.component";
let CesiumModule = class CesiumModule {
};
CesiumModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CommonModule, CommonModule, ButtonComponent, MapComponent],
        exports: [] // We're not exporting anything from this module,
    })
], CesiumModule);
export { CesiumModule };
//# sourceMappingURL=app.module.js.map