# Titra-Angular-Cesium-Case-Study
### Author: **Egemen OZGUR**
This project showcases a simple Angular [17.0.8] application that leverages Cesium to enable users to draw rectangles on a map and calculate their areas with ease.

## For Installation

```sh
npm install
```

```sh
npm link @angular/cli
```

## For Usage

```sh
ng serve --open
```
If you want to use your personal Cesium ion token, you can change in `src\environment\environment.ts`.
# How to use the app
When you run the code, a Cesium map viewer will open, displaying two buttons at the center-top: "Calculate Area" and "Clear". Click twice on the map to define a rectangle. Then, click "Calculate Area" to see the rectangle's area displayed. The calculated area will be shown in a box on the right side of the button, either in square meters (m^2) or square kilometers (km^2) depending on the size of the rectangle. Click "Clear" to remove the rectangle and the area calculation.

# Technologies Used in Project

Angular, Typescript, CesiumJS, Tailwind

