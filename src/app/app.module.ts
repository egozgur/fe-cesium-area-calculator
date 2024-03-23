// cesium.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumClickHandler } from './cesiumComponents/cesium.click.handler';
import {CesiumDirective} from "./cesiumComponents/cesium.directive";

@NgModule({
    declarations: [CesiumClickHandler], // Direktif ve Handler'ı burada bildirin
    imports: [CommonModule, CesiumDirective],
    exports: [CesiumClickHandler] // Bu direktif ve handler'ı başka modüllerde kullanabilmek için dışa aktarın
})
export class CesiumModule {}
