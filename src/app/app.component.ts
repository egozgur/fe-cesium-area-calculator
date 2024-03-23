import {Component, Input} from "@angular/core";
import {CesiumModule} from "./app.module";
import {ButtonComponent} from "./button-component/button.component";
import {CommonModule} from "@angular/common";
import {MapComponent} from "./map-component/map.component";

@Component({
    selector: "app-root",
    standalone: true, // Indicates that this component should not have a host element
    imports: [CommonModule, CesiumModule, ButtonComponent, MapComponent], // Importing necessary modules and components
    templateUrl: "./app.component.html",
})
export class AppComponent {
    @Input() area: string | undefined;

    constructor() {
    }

    setArea(area: string) {
        this.area = area;
    }
}
