import { __decorate } from "tslib";
import { Directive } from '@angular/core';
let CesiumClickHandler = class CesiumClickHandler {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        console.log('Viewer:', this.viewer);
    }
};
CesiumClickHandler = __decorate([
    Directive({
        selector: '[cesiumClickHandler]',
    })
], CesiumClickHandler);
export { CesiumClickHandler };
//# sourceMappingURL=cesium.click.handler.js.map