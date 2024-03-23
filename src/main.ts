import { bootstrapApplication } from '@angular/platform-browser';
import { Ion } from 'cesium';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNGQ3NjZkMS0wZGE0LTQ3MzQtYmVhZC1hMTA0MDE4M2I4NGYiLCJpZCI6OTkxMjEsImlhdCI6MTY1NjMwNzQ4MX0.NtX7HJtSEhyvL72WckzRRSzXjh7c3fY-b5UpSIoMw-I';

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
