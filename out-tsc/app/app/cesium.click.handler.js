"use strict";
/*
import { Directive, ElementRef, OnInit } from '@angular/core';
import { Viewer, ScreenSpaceEventType, Cartesian3 } from 'cesium';

@Directive({
    selector: '[cesiumClickHandler]',
})
export class CesiumClickHandler implements OnInit {
    private viewer!: Viewer;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.viewer = new Viewer(this.el.nativeElement);

        this.viewer.screenSpaceEventHandler.setInputAction((clickEvent: any) => {
            const clickedPosition = clickEvent.position;

            if (clickedPosition) {
                const cartesian = this.viewer.scene.camera.pickEllipsoid(clickedPosition, this.viewer.scene.globe.ellipsoid);

                if (cartesian) {
                    console.log('Tıklanan Koordinatlar:', cartesian);
                } else {
                    console.warn('Dünya koordinatları alınamadı.');
                }
            }
        }, ScreenSpaceEventType.LEFT_CLICK);
    }
}
*/
//# sourceMappingURL=cesium.click.handler.js.map