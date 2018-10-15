import { MaterialsModule } from './materials/materials.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SasiMatTableComponent } from 'sasi/shared/components/sasi-mat-table/sasi-mat-table.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { NoRecordsFoundComponent } from './components/no-records-found/no-records-found.component';

/* Best practice not to import Shared Module to Core or App Module
   Only import it to the components (via feature module) who will use it */

@NgModule({
  declarations: [
    /* Directive */

    /* Components */
    SasiMatTableComponent,
    NoRecordsFoundComponent
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
    NoRecordsFoundComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
