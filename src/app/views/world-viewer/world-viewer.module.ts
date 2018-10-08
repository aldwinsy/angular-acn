import { NgModule } from '@angular/core';
import { SharedModule } from 'sasi/shared/shared.module';
import { MaterialsModule } from 'sasi/shared/materials/materials.module'; // Check if this can be moved in SharedModule
import { WorldViewerRoutingModule } from 'sasi/views/world-viewer/world-viewer-routing.module';

/* Components */

import { SearchComponent } from 'sasi/views/world-viewer/search/search.component';
import { SearchPanelComponent } from 'sasi/views/world-viewer/search/search-panel/search-panel.component';
import { SummaryPanelComponent } from 'sasi/views/world-viewer/search/summary-panel/summary-panel.component';
import { SearchResultsComponent } from 'sasi/views/world-viewer/search-results/search-results.component';
import { ObjectViewComponent } from 'sasi/views/world-viewer/object-view/object-view.component';
import { CompareObjectViewComponent } from 'sasi/views/world-viewer/compare-object-view/compare-object-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Services */

@NgModule({
  declarations: [
    ObjectViewComponent,
    CompareObjectViewComponent,
    SearchComponent,
    SearchPanelComponent,
    SummaryPanelComponent,
    SearchResultsComponent
  ],

  imports: [
    SharedModule,
    MaterialsModule,
    WorldViewerRoutingModule,
    FlexLayoutModule
  ],

  providers: [
    // Add Services
  ]
})
export class WorldViewerModule { }
