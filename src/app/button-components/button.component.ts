import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CesiumDirective } from "../cesiumComponents/cesium.directive";

@Component({
  selector: "[appButton]",
  standalone: true,
  imports: [CesiumDirective], //haritanın ekranda çıkmasını sağlayacak
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent implements OnInit {
  // Input property for storing the calculated area
  @Input() area: number | undefined;

  // Reference to the CesiumDirective for interacting with the map functions
  @ViewChild(CesiumDirective) cesiumDirective: any;

  constructor() {}

  ngOnInit() {}
  // Function to calculate the area using the CesiumDirective
  calculateArea() {
    if (this.cesiumDirective) {
      // Calculate the area using the CesiumDirective function and update the area property
      this.area = this.cesiumDirective.calculateArea();
    } else {
      // Log an error if the CesiumDirective instance is not available
      console.error('CesiumDirective not available.');
    }
  }
  // Function to clear the selected area on the map
  clearArea() {
    // Ensure that the CesiumDirective instance exists
    if (this.cesiumDirective) {
      // Clear the selected area on the map using the CesiumDirective function
      this.cesiumDirective.clearArea();
      // Reset the area property
      this.area = undefined;
    } else {
      // Log an error if the CesiumDirective instance is not available
      console.error('CesiumDirective not available.');
    }
  }
}
