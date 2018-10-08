import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

/* Best practice not to import Shared Module to Core or App Module
   Only import it to the components (via feature module) who will use it */

@NgModule({
  declarations: [
    /* Directive */

    /* Components */

    /* Pipes */

  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    // FlexLayoutModule
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
