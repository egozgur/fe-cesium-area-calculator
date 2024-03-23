import { Directive, ElementRef, OnInit } from '@angular/core';
import { Viewer } from 'cesium';

@Directive({
    selector: '[cesiumClickHandler]',
})
export class CesiumClickHandler implements OnInit {
    private viewer!: Viewer;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        console.log('Viewer:', this.viewer);
    }
}
