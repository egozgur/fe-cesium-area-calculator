import {Component, ElementRef, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CesiumService} from "../cesium-service/cesium.service";

@Component({
    selector: "app-button",
    standalone: true, // Indicates that this component doesn't have any dependencies on Angular's reactive forms module
    imports: [CommonModule],
    templateUrl: "./button.component.html"

})
export class ButtonComponent {

    @Input() title: string | undefined; // Input property for the button title
    @Output() newAreaEvent = new EventEmitter<string>(); // Output event emitter for new area event

    private cesiumService: CesiumService  // Instance of the CesiumService

    // Constructor initializing the CesiumService instance
    // @ts-ignore
    constructor(private elementRef: ElementRef, private cesiumService: CesiumService) {
        this.title = elementRef.nativeElement.getAttribute('title')
        this.cesiumService = cesiumService;
    }
    // Function to be called when the button is clicked
    callMapFunction($event: MouseEvent) {
        if (this.title == "Calculate Area") {
            let calculatedArea = this.cesiumService.calculateArea();
            this.newAreaEvent.emit(calculatedArea);
        } else if (this.title == "Clear Area") {
            this.cesiumService.clearArea();
            this.newAreaEvent.emit(undefined); // Emitting undefined to indicate area cleared
        }
    }
}
