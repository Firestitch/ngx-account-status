import { Component } from '@angular/core';

import * as moment from 'moment-timezone';


@Component({
  selector: 'example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {

  public account = null;

  constructor() {
    this.account = {
      create_date: moment(),
      email: 'john_doe@gmail.com',
      state: 'pending_activation',
      undeleteStatuses: ['pending_activation', 'active'],
      activation_email_date: moment(),
      activation_email_message: 'Error Message'
    };

  }

  public action(action) {
    console.log(action);
  }

}
