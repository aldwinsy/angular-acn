import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // check if can be removed
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from 'sasi/core/core-routing.module';
import { MaterialsModule } from 'sasi/shared/materials/materials.module'; // Check if this can be moved to SharedModule
import { FlexLayoutModule } from '@angular/flex-layout'; // Put this he re for now

import { SasiStatusModule } from 'sasi/views/sasi-status/sasi-status.module';
import { WorldViewerModule } from 'sasi/views/world-viewer/world-viewer.module';

import { LoginComponent } from 'sasi/core/login/login.component';
import { HeaderComponent } from 'sasi/core/header/header.component';
import { FooterComponent } from 'sasi/core/footer/footer.component';
import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';
import { NavigationComponent } from './header/navigation/navigation.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    MaterialsModule, // Temporarily add here for now
    FlexLayoutModule,

    /* SASI Modules */
    SasiStatusModule, // Do this for now. Should not be here since
    WorldViewerModule // we want to implement Lazy Loading..
  ],

  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule
  ],

  providers: [
    // Add providers here
  ]

})
export class CoreModule { }
