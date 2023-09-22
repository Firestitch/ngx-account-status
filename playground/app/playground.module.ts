import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsAccountStatusModule } from '@firestitch/account-status';
import { FsClearModule } from '@firestitch/clear';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { AppComponent } from './app.component';
import { ExampleComponent, ExamplesComponent } from './components';
import { AppMaterialModule } from './material.module';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsAccountStatusModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsClearModule,
    FsDatePickerModule.forRoot(),
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  entryComponents: [],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}

