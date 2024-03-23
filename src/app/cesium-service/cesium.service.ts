import { Injectable } from '@angular/core';
import * as Cesium from "cesium";
import {Cartesian3, Viewer} from "cesium";

@Injectable({
  providedIn: 'root'
})
export class CesiumService {
  private bottomRight: Cartesian3 | undefined;
  private topLeft: Cartesian3 | undefined;
  private viewer: Viewer | undefined;

  constructor() { }

  // Creates a rectangle entity on the map based on user-defined coordinates.
  createRectangle(viewer: Viewer, topLeft: Cartesian3, bottomRight: Cartesian3): void {
    this.viewer = viewer;
    if (topLeft && bottomRight) {
      //Gets cartographic coordinates of top left and bottom right corners
      const topLeftCartographic = Cesium.Cartographic.fromCartesian(
          topLeft
      );
      const bottomRightCartographic = Cesium.Cartographic.fromCartesian(
          bottomRight
      );

      //Define rectangle corners
      const rectangleProperty = new Cesium.CallbackProperty(() => {
        return Cesium.Rectangle.fromCartographicArray([
          topLeftCartographic,
          bottomRightCartographic,
        ]);
      }, false);

      //Sets rectangle material
      const materialProperty = new Cesium.ColorMaterialProperty(
          Cesium.Color.fromCssColorString("rgba(238, 75, 43, 0.5)") // Örnek olarak yarı saydam beyaz renk
      );

      //Creates entity for the rectangle
      const rectangleEntity = new Cesium.Entity({
        rectangle: {
          coordinates: rectangleProperty,
          material: materialProperty,
          height: 0,
        },
      });
      this.bottomRight = bottomRight;
      this.topLeft = topLeft;
      // Add rectangle entity to the viewer
      viewer.entities.add(rectangleEntity);
    }
  }

  /*  Calculates the area of the user-defined rectangle in square kilometers.
  @returns The area of the rectangle in square kilometers.
  @throws {Error} Thrown when the corners are not defined.*/
  calculateArea(): string {
    if (this.topLeft && this.bottomRight) {
      // Gets cartographic coordinates of the top-left and bottom-right corners
      const topLeftCartographic = Cesium.Cartographic.fromCartesian(
          this.topLeft
      );
      const bottomRightCartographic = Cesium.Cartographic.fromCartesian(
          this.bottomRight
      );

      // Projects the top-left and bottom-right points to plane coordinates
      const topLeftProjected =
          Cesium.Cartographic.toCartesian(topLeftCartographic);
      const bottomRightProjected = Cesium.Cartographic.toCartesian(
          bottomRightCartographic
      );

      // Calculate width and height (in meters)
      const width = Math.abs(topLeftProjected.x - bottomRightProjected.x);
      const height = Math.abs(topLeftProjected.y - bottomRightProjected.y);

      // Calculate area (in square meters)
      const areaSquareMeters = width * height;

      // Convert area to square kilometers and format it
      const areaSquareKilometers = areaSquareMeters / 1000000;

      if (areaSquareKilometers > 1) {
        let formattedArea = areaSquareKilometers.toString();
        // Remove the last three digits of the area
        const index = formattedArea.lastIndexOf(".");
        if (index !== -1) {
          formattedArea = formattedArea.substring(0, index);
        }
        return formattedArea + " km^2";
      } else {
        let formattedArea = areaSquareMeters.toString();
        // Remove the last three digits of the area
        const index = formattedArea.lastIndexOf(".");
        if (index !== -1) {
          formattedArea = formattedArea.substring(0, index);
        }
        return formattedArea + " m^2";
      }


    } else {
      console.warn("Area cannot be calculated: Corners are not defined.");
      return "0";
    }
  }

//Clears the drawn rectangle from the map and resets the corner points.
  clearArea(): void {
    // Remove rectangle from the map
    if (this.viewer != undefined) {
      this.viewer.entities.removeAll();
      this.viewer.dataSources.removeAll();
      // Reset corner points
      this.topLeft = undefined;
      this.bottomRight = undefined;
    }
  }
}
