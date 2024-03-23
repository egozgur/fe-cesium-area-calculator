import {Component, ElementRef, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CesiumService} from "../cesium-service/cesium.service";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./button.component.html"

})
export class ButtonComponent {
    // Input property for storing the calculated area
    /*@Input() area: number | undefined;*/

    // Input property for storing the calculated area
    @Input() title: string | undefined;
    @Output() newAreaEvent = new EventEmitter<string>();

    private cesiumService: CesiumService

    // @ts-ignore
    constructor(private elementRef: ElementRef, private cesiumService: CesiumService) {
        this.title = elementRef.nativeElement.getAttribute('title')
        this.cesiumService = cesiumService;
    }

    callMapFunction($event: MouseEvent) {
        if (this.title == "Calculate Area") {
            let calculatedArea = this.cesiumService.calculateArea();
            this.newAreaEvent.emit(calculatedArea);
        } else if (this.title == "Clear Area") {
            this.cesiumService.clearArea();
            this.newAreaEvent.emit(undefined);
        }
    }
}
