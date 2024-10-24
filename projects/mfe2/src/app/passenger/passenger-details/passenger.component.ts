import {Component} from '@angular/core';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger.component.html',
  styleUrls: [ './passenger.component.css']
})
export class PassengerDetailComponent {
  public passenger = {
    name: '',
    age: '',
    contact: '',
    from: '',
    to: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form);
    }
  }
}
