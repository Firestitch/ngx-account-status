import { Component } from '@angular/core';
import { Status } from 'src/app/interfaces/status';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsClearModule } from '@firestitch/clear';
import { FsAccountStatusComponent } from '../../../../src/app/components/account-status/account-status.component';


@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    standalone: true,
    imports: [MatFormField, MatInput, FormsModule, FsDatePickerModule, FsClearModule, FsAccountStatusComponent]
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
