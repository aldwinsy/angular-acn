import { MaterialsModule } from './materials/materials.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SasiMatTableComponent } from 'sasi/shared/components/sasi-mat-table/sasi-mat-table.component';


import { FlexLayoutModule } from '@angular/flex-layout';

/* Best practice not to import Shared Module to Core or App Module
   Only import it to the components (via feature module) who will use it */

@NgModule({
  declarations: [
    /* Directive */

    /* Components */
    SasiMatTableComponent
    /* Pipes */

  ],

  imports: [
    MaterialsModule
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    SasiMatTableComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
