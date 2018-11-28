import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';

type Action = 'activate' | 'email_activation' | 'delete' | 'undelete';


@Component({
  selector: 'fs-account-status',
  templateUrl: './fs-account-status.component.html',
  styleUrls: [ './fs-account-status.component.scss' ],
})
export class FsAccountStatusComponent implements OnInit, OnChanges {

  @Input() public created: any = null;
  @Input() public status: string = null;
  @Input() public email: string = null;
  @Input() public undeleteStatuses: string[] = ['pending_activation', 'active'];
  @Input() public activationEmailDate: any = null;
  @Input() public activationEmailMessage: string = null;

  @Output() public action = new EventEmitter<any>();

  public deleted = false;

  public statusLabels = {
    active: 'Active',
    pending_activation: 'Pending Activation',
    deleted: 'Deleted'
  };

  constructor() { }

  public ngOnInit() {
  }

  public ngOnChanges() {
    this.deleted = this.undeleteStatuses.indexOf(this.status) === -1;
  }

  public onAction(action: Action, data = null) {
    this.action.emit({ action, data });
  }

  public cancel($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

}
