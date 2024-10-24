import { Routes } from '@angular/router';
import { PassengerDetailComponent } from './passenger-details/passenger.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: PassengerDetailComponent
    }
];
