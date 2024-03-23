import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { CesiumDirective } from "../cesiumComponents/cesium.directive";
let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() { }
    /* public createRectangle(): void{
        console.log("rectangle çıktısı")
        //CesiumDirective. cesiumDirective.createRectangle()
        this.cesiumDirective.createRectangle(); // CesiumDirective içindeki fonksiyonu çağır
    
      }
    */
    calculateArea() {
        this.cesiumDirective.calculateArea(); // CesiumDirective içindeki fonksiyonu çağır
        //this.area = calculated;
    }
    clear() {
        this.cesiumDirective.clearArea();
    }
};
__decorate([
    Input()
], ButtonComponent.prototype, "name", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "area", void 0);
__decorate([
    ViewChild(CesiumDirective)
], ButtonComponent.prototype, "cesiumDirective", void 0);
ButtonComponent = __decorate([
    Component({
        selector: '[appButton]',
        standalone: true,
        imports: [
            CesiumDirective
        ],
        templateUrl: './button.component.html',
        styleUrl: './button.component.css'
    })
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map