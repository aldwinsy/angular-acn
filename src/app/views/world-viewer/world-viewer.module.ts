import { NgModule } from '@angular/core';
import { SharedModule } from 'sasi/shared/shared.module';
import { WorldViewerRoutingModule } from 'sasi/views/world-viewer/world-viewer-routing.module';

/* Components */

import { SearchComponent } from 'sasi/views/world-viewer/search/search.component';
import { SearchPanelComponent } from 'sasi/views/world-viewer/search/search-panel/search-panel.component';
import { SummaryPanelComponent } from 'sasi/views/world-viewer/search/summary-panel/summary-panel.component';
import { SearchResultsComponent } from 'sasi/views/world-viewer/search-results/search-results.component';
import { ObjectViewComponent } from 'sasi/views/world-viewer/object-view/object-view.component';
import { CompareObjectViewComponent } from 'sasi/views/world-viewer/compare-object-view/compare-object-view.component';
import { WorldViewerComponent } from 'sasi/views/world-viewer/world-viewer.component';

/* Services */

@NgModule({
  declarations: [
    ObjectViewComponent,
    CompareObjectViewComponent,
    SearchComponent,
    SearchPanelComponent,
    SummaryPanelComponent,
    SearchResultsComponent,
    WorldViewerComponent
  ],

  imports: [
    SharedModule,
    WorldViewerRoutingModule
  ],

  providers: [
    // Add Services
  ]
})
export class WorldViewerModule { }
