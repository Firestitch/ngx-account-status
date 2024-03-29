import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

import { filter } from 'lodash-es';

import { Status } from '../../interfaces/status';

type Action = 'activate' | 'email_activation' | 'delete' | 'undelete';


@Component({
  selector: 'fs-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: [ './account-status.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsAccountStatusComponent implements OnChanges {

  @Input() public created: any = null;
  @Input() public status: string = null;
  @Input() public email: string = null;
  @Input() public statuses: Status[] = [];
  @Input() public activationEmailDate: any = null;
  @Input() public activationEmailMessage: string = null;
  @Input() public statusLabel = 'Status';
  @Input() public createdLabel = 'Created';
  @Input() public objectName = 'account';

  @Input() public hideMenu = false;

  @Output() public action = new EventEmitter<any>();

  public statusDeleted = false;
  public statusPendingActivation = false;
  public statusName = '';
  public undeleteStatuses = [];

  public ngOnChanges(changes: SimpleChanges) {

    if (changes.status) {
      const status: Status = filter(this.statuses, { value: this.status })[0];
      this.statusDeleted = status && status.deleted;
      this.statusPendingActivation = status && status.pendingActivation;
      this.statusName = status ? status.name : '';
    }

    if (changes.statuses) {
      this.undeleteStatuses = filter(this.statuses, { undelete: true });
    }
  }

  public onAction(action: Action, data = null) {
    this.action.emit({ action, data });
  }

}
