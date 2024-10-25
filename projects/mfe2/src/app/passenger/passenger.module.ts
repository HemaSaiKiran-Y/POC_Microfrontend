import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDetailComponent } from './passenger-details/passenger.component';
import { RouterModule } from '@angular/router';
import { PASSENGER_ROUTES } from './passenger.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PASSENGER_ROUTES)
  ],
  declarations: [
    PassengerDetailComponent
  ]
})
export class PassengerModule { }
