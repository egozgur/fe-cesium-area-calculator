import { __decorate } from "tslib";
import { Directive } from '@angular/core';
import { Viewer } from 'cesium';
let CesiumDirective = class CesiumDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        const viewer = new Viewer(this.el.nativeElement);
    }
};
CesiumDirective = __decorate([
    Directive({
        selector: '[appCesium]',
        standalone: true
    })
], CesiumDirective);
export { CesiumDirective };
//# sourceMappingURL=cesium.directive.js.map