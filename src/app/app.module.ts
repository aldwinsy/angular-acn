import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { SasiStatusComponent } from './sasi-status/sasi-status.component';
import { BannerComponent } from './sasi-status/banner/banner.component';
import { DataStatusComponent } from './sasi-status/data-status/data-status.component';
import { DataReportComponent } from './sasi-status/data-report/data-report.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { WorldViewerComponent } from './world-viewer/world-viewer.component';
import { SearchComponent } from './world-viewer/search/search.component';
import { SummaryPanelComponent } from './world-viewer/search/summary-panel/summary-panel.component';
import { SearchPanelComponent } from './world-viewer/search/search-panel/search-panel.component';
import { SearchResultsComponent } from './world-viewer/search-results/search-results.component';
import { ObjectViewComponent } from './world-viewer/object-view/object-view.component';
import { CompareObjectViewComponent } from './world-viewer/compare-object-view/compare-object-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SasiStatusComponent,
    BannerComponent,
    DataStatusComponent,
    DataReportComponent,
    DocumentationComponent,
    WorldViewerComponent,
    SearchComponent,
    SummaryPanelComponent,
    SearchPanelComponent,
    SearchResultsComponent,
    ObjectViewComponent,
    CompareObjectViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
