import { __decorate } from "tslib";
import { Component, Input, ViewChild } from "@angular/core";
import { CesiumDirective } from "../cesiumComponents/cesium.directive";
let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() { }
    // Function to calculate the area using the CesiumDirective
    calculateArea() {
        if (this.cesiumDirective) {
            // Calculate the area using the CesiumDirective function and update the area property
            this.area = this.cesiumDirective.calculateArea();
        }
        else {
            // Log an error if the CesiumDirective instance is not available
            console.error('CesiumDirective not available.');
        }
    }
    // Function to clear the selected area on the map
    clearArea() {
        // Ensure that the CesiumDirective instance exists
        if (this.cesiumDirective) {
            // Clear the selected area on the map using the CesiumDirective function
            this.cesiumDirective.clearArea();
            // Reset the area property
            this.area = undefined;
        }
        else {
            // Log an error if the CesiumDirective instance is not available
            console.error('CesiumDirective not available.');
        }
    }
};
__decorate([
    Input()
], ButtonComponent.prototype, "area", void 0);
__decorate([
    ViewChild(CesiumDirective)
], ButtonComponent.prototype, "cesiumDirective", void 0);
ButtonComponent = __decorate([
    Component({
        selector: "[appButton]",
        standalone: true,
        imports: [CesiumDirective],
        templateUrl: "./button.component.html",
        styleUrl: "./button.component.css",
    })
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map