import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from 'sasi/views/world-viewer/search/search.component';
import { SearchResultsComponent } from 'sasi/views/world-viewer/search-results/search-results.component';
import { ObjectViewComponent } from 'sasi/views/world-viewer/object-view/object-view.component';
import { CompareObjectViewComponent } from 'sasi/views/world-viewer/compare-object-view/compare-object-view.component';
import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';
import { WorldViewerComponent } from 'sasi/views/world-viewer/world-viewer.component';

const routes: Routes = [
    {   path: 'world-viewer',
        component: WorldViewerComponent,
        children: [
            { path: '', component: SearchComponent },
            { path: 'search-results', component: SearchResultsComponent },
            { path: 'object-view', component: ObjectViewComponent },
            { path: 'object-view-component', component: CompareObjectViewComponent },
            { path: '**', component: PageNotFoundComponent }
        ]
    }
];
/* const routes: Routes = [
    { path: '', component: SearchComponent, children: [
        { path: '', component: SearchResultsComponent}
    ] }
]; */

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorldViewerRoutingModule { }
