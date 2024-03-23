import { Component } from "@angular/core";
import { CesiumModule } from "./app.module";
import { ButtonComponent } from "./button-components/button.component";

@Component({
  selector: "app-root",
  standalone: true, // Indicates that this component should not have a host element
  imports: [CesiumModule, ButtonComponent], // Importing necessary modules and components
  template: "<div appButton appCesium ></div>", // Template with appButton and appCesium directives
})
export class AppComponent {}
