// cesium.module.ts
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumClickHandler } from './cesiumComponents/cesium.click.handler';
import { CesiumDirective } from "./cesiumComponents/cesium.directive";
let CesiumModule = class CesiumModule {
};
CesiumModule = __decorate([
    NgModule({
        declarations: [CesiumClickHandler],
        imports: [CommonModule, CesiumDirective],
        exports: [CesiumClickHandler] // Bu direktif ve handler'ı başka modüllerde kullanabilmek için dışa aktarın
    })
], CesiumModule);
export { CesiumModule };
//# sourceMappingURL=app.module.js.map