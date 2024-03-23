import { Component } from '@angular/core';
import {CesiumModule} from "./app.module";
import {ButtonComponent} from "./button-components/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CesiumModule, ButtonComponent],
  template: '<div appButton appCesium cesiumClickHandler></div>'
})
export class AppComponent {}
