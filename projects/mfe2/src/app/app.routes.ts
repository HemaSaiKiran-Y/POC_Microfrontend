import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    {
        path: 'passenger',
        loadChildren: () => import('./passenger/passenger.module')
          .then(m => m.PassengerModule)
      },
];