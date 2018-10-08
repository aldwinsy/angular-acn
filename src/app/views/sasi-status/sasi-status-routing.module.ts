import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SasiStatusComponent } from 'sasi/views/sasi-status/sasi-status.component';

const routes: Routes = [
    { path: '', component: SasiStatusComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SasiStatusRoutingModule { }
