import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { CesiumModule } from "./app.module";
import { ButtonComponent } from "./button-components/button.component";
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        standalone: true,
        imports: [CesiumModule, ButtonComponent],
        template: "<div appButton appCesium ></div>", // Template with appButton and appCesium directives
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map