import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { AccountStatuses } from '../../consts/account-statuses.const';
import { AccountStatus } from '../../enums';

type Action = 'activate' | 'email_activation' | 'delete' | 'undelete';


@Component({
  selector: 'fs-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: [ './account-status.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsAccountStatusComponent implements OnInit {

  @Input() public created: any = null;
  @Input() public status: string = null;
  @Input() public email: string = null;
  @Input() public statuses = AccountStatuses;
  @Input() public activationEmailDate: any = null;
  @Input() public activationEmailMessage: string = null;
  @Input() public statusLabel = 'Status';
  @Input() public createdLabel = 'Created';
  @Input() public objectName = 'account';

  @Input() public hideMenu = false;

  @Output() public action = new EventEmitter<any>();

  public statusNames = {};
  public AccountStatus = AccountStatus;

  public ngOnInit() {
    this.statusNames = this.statuses.reduce((acc, status) => {
      acc[status.value] = status.name;
      return acc;
    }, {});
  }

  public onAction(action: Action, data = null) {
    this.action.emit({ action, data });
  }

}
