import { SasiMatTableComponent } from 'sasi/shared/components/sasi-mat-table/sasi-mat-table.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatSortModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // ---Angular Materials---
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    // ---Components---
    SasiMatTableComponent,
  ],
  exports: [
    CommonModule,
    SasiMatTableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SasiMatTableModule {}
