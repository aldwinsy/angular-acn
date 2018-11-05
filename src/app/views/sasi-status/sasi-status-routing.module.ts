import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SasiStatusComponent } from 'sasi/views/sasi-status/sasi-status.component';
import { DataStatusComponent } from 'sasi/views/sasi-status/data-status/data-status.component';
import { PurgatoryParadiseComponent } from 'sasi/views/sasi-status/data-status/purgatory-paradise/purgatory-paradise.component';
import { PublishedComponent } from 'sasi/views/sasi-status/data-status/published/published.component';

export const routes: Routes = [
    { path: 'sasi-status', component: SasiStatusComponent,
        children: [
            { path: '', component: DataStatusComponent },
            { path: 'purgatory-paradise', component: PurgatoryParadiseComponent },
            { path: 'published', component: PublishedComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SasiStatusRoutingModule { }
