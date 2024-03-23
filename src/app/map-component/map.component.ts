import {Component, ElementRef, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Cartesian3, ScreenSpaceEventType, Viewer} from "cesium";
import {CesiumService} from "../cesium-service/cesium.service";

@Component({
    selector: "cesium-map",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./map.component.html",
    styleUrl: "./map.component.css"
})
export class MapComponent implements OnInit {
    // Input property for storing the calculated area
    private viewer!: Viewer;
    private topLeft: Cartesian3 | undefined;
    private bottomRight: Cartesian3 | undefined;
    private cesiumService: CesiumService;

    // @ts-ignore
    constructor(private el: ElementRef, private cesiumService: CesiumService) {
        this.cesiumService = cesiumService;
    }

    // Initializes the Cesium viewer and runs setupClickEvent function.
    ngOnInit(): void {
        this.initCesium();
    }

    public initCesium(): void {
        this.viewer = new Viewer(this.el.nativeElement, {
            timeline: false,
            fullscreenButton: false,
            animation: false,
        });
        this.setupClickEvent();
    }

    // Sets up the click event to capture user-defined rectangle.
    setupClickEvent(): void {
        this.viewer.screenSpaceEventHandler.setInputAction((clickEvent: any) => {
            const clickedPosition = clickEvent.position;

            if (clickedPosition) {
                const cartesian = this.viewer.scene.camera.pickEllipsoid(
                    clickedPosition,
                    this.viewer.scene.globe.ellipsoid
                );

                if (cartesian) {
                    if (!this.topLeft) {
                        this.topLeft = cartesian;
                    } else if (!this.bottomRight) {
                        this.bottomRight = cartesian;

                        this.cesiumService.createRectangle(this.viewer, this.topLeft, this.bottomRight); // Call function to create rectangle
                        this.bottomRight = undefined
                        this.topLeft = undefined
                    }
                } else {
                    console.warn("Unable to obtain world coordinates.");
                }
            }
        }, ScreenSpaceEventType.LEFT_CLICK);
    }
}
