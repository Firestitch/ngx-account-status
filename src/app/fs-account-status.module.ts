import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';

import { FsDateModule } from '@firestitch/date';

import { FsAccountStatusComponent } from './components/fs-account-status/fs-account-status.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexModule,
    FsDateModule
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
