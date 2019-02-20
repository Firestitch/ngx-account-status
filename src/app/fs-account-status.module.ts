import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
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
