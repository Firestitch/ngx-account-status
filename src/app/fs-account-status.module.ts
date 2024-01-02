import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { FsDateModule } from '@firestitch/date';
import { FsLabelModule } from '@firestitch/label';
import { FsMenuModule } from '@firestitch/menu';

import { FsAccountStatusComponent } from './components/account-status/account-status.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FsDateModule,
    FsLabelModule,
    FsMenuModule,
  ],
  exports: [
    FsAccountStatusComponent,
  ],
  declarations: [
    FsAccountStatusComponent,
  ],
})
export class FsAccountStatusModule {
  public static forRoot(): ModuleWithProviders<FsAccountStatusModule> {
    return {
      ngModule: FsAccountStatusModule,
    };
  }

}
