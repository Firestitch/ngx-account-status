import { Component } from '@angular/core';


@Component({
  selector: 'example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {

  public account = null;

  constructor() {
    this.account = {
      create_date: new Date(),
      email: 'john_doe@gmail.com',
      state: 'pending_activation',
      undeleteStatuses: ['pending_activation', 'active'],
      activate_email_date: new Date(),
      activate_email_message: 'Error message'
    };

  }

  public action(action) {
    console.log(action);

    if (action.action === 'activate') {
      this.account.state = 'active';
    }

    if (action.action === 'delete') {
      this.account.state = 'deleted';
    }

    if (action.action === 'undelete') {
      this.account.state = action.data.state;
    }

    if (action.action === 'email_activation') {
      alert('Sent Email Activation');
    }
  }

}
