import { NgModule } from '@angular/core';
import { SharedModule } from 'sasi/shared/shared.module';
// import { MaterialsModule } from 'sasi/shared/materials/materials.module'; // Check if this can be moved to SharedModule
import { SasiStatusRoutingModule } from 'sasi/views/sasi-status/sasi-status-routing.module';

/* Components */
import { SasiStatusComponent } from 'sasi/views/sasi-status/sasi-status.component';
import { BannerComponent } from 'sasi/views/sasi-status/banner/banner.component';
import { DataReportComponent } from 'sasi/views/sasi-status/data-report/data-report.component';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';

/* Services */

@NgModule({
  declarations: [
    SasiStatusComponent,
    BannerComponent,
    DataReportComponent,
    DataStatusComponent
  ],

  imports: [
    SharedModule,
    // MaterialsModule,
    SasiStatusRoutingModule
  ],

  exports: [SasiStatusRoutingModule],

  providers: [
    // Add Services
  ]
})
export class SasiStatusModule { }
