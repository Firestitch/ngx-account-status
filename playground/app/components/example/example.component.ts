import { Component } from '@angular/core';
import { Status } from 'src/app/interfaces/status';


@Component({
  selector: 'example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {

  public account = null;
  public activationEmailDate = new Date();
  public activationEmailMessage = 'Failed to send email';

  public statuses: Status[] = [
    {
      value: 'deleted',
      name: 'Deleted',
      deleted: true
    },
    {
      value: 'active',
      name: 'Active',
      undelete: true
    },
    {
      value: 'pending_activation',
      name: 'Pending Activation',
      undelete: true,
      pendingActivation: true
    }
  ];

  constructor() {
    this.account = {
      create_date: new Date(),
      email: 'john_doe@gmail.com',
      state: 'pending_activation'
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
