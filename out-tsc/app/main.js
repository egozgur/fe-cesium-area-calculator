import { bootstrapApplication } from '@angular/platform-browser';
import { Ion } from 'cesium';
import { environment } from './environment/environment';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Setting access token for Cesium Ion from environment.ts
Ion.defaultAccessToken = environment.ionAccessToken;
// Setting CESIUM_BASE_URL for Cesium
window['CESIUM_BASE_URL'] = environment.cesiumBaseUrl;
// Bootstrapping the Angular application with AppComponent and appConfig
bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map