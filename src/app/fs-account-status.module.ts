import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    FsDateModule,
    FsLabelModule,
    FsMenuModule
  ],
  exports: [
    FsAccountStatusComponent
  ],
  entryComponents: [],
  declarations: [
    FsAccountStatusComponent
  ],
  providers: [],
})
export class FsAccountStatusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsAccountStatusModule
    };
  }

}
