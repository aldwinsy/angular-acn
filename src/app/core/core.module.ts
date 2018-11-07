import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from 'sasi/core/core-routing.module';

import { SasiStatusModule } from 'sasi/views/sasi-status/sasi-status.module';
import { WorldViewerModule } from 'sasi/views/world-viewer/world-viewer.module';

import { LoginComponent } from 'sasi/core/login/login.component';
import { HeaderComponent } from 'sasi/core/header/header.component';
import { FooterComponent } from 'sasi/core/footer/footer.component';
import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SharedModule } from 'sasi/shared/shared.module';
import { ConfigModule } from 'sasi/views/configurations/config.module';
import { BannerComponent } from 'sasi/views/sasi-status/banner/banner.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],

  imports: [
    HttpClientModule,
    /* SASI Modules */
    SharedModule,
    SasiStatusModule, // Do this for now. Should not be here since
    WorldViewerModule, // we want to implement Lazy Loading..
    ConfigModule,
    CoreRoutingModule,
  ],

  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SharedModule
  ],

  providers: [
    // Add providers here
  ]

})
export class CoreModule { }
