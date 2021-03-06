import { NgModule } from '@angular/core';
import { SharedModule } from 'sasi/shared/shared.module';

import { SasiStatusRoutingModule } from 'sasi/views/sasi-status/sasi-status-routing.module';

/* Components */
import { SasiStatusComponent } from 'sasi/views/sasi-status/sasi-status.component';
import { DataReportComponent } from 'sasi/views/sasi-status/data-report/data-report.component';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { PurgatoryParadiseComponent } from './data-status/purgatory-paradise/purgatory-paradise.component';

/* Services */
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { PublishedComponent } from './data-status/published/published.component';

@NgModule({
  declarations: [
    SasiStatusComponent,
    DataReportComponent,
    DataStatusComponent,
    PurgatoryParadiseComponent,
    PublishedComponent
    // SasiMatTableComponent
  ],

  imports: [
    SharedModule,
    SasiStatusRoutingModule,
  ],

  exports: [
    SasiStatusRoutingModule
  ],

  providers: [
    // Add Services
    SasiStatusService
  ]
})
export class SasiStatusModule { }
