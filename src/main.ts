import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideHttpClient(),
    provideRouter([
      {
        path: 'home',
        loadComponent: () =>
          import('./app/airlines-list/airlines-list.component').then(
            (c) => c.AirlinesListComponent
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
}).catch((err) => console.log(err));
