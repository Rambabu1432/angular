import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';   // ✅ Needed for HttpClient
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideHttpClient(),     // ✅ Add this if you use HttpClient in services
    ...(appConfig?.providers ?? [])
  ]
}).catch((err) => console.error(err));
