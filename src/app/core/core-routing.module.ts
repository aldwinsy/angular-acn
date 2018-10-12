import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'sasi/core/login/login.component';
import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';
import { SasiStatusComponent } from 'sasi/views/sasi-status/sasi-status.component';
import { SearchComponent } from 'sasi/views/world-viewer/search/search.component';
import { ConfigComponent } from 'sasi/views/configurations/config.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sasi-status',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sasi-status',
        /* Do this for now. Need to do lazy loading. */
        // loadChildren: '../views/sasi-status/sasi-status.module#SasiStatusModule'
        component: SasiStatusComponent
    },
    {
        path: 'world-viewer',
        /* Do this for now. Need to do lazy loading. */
        // loadChildren: '../views/world-viewer/world-viewer.module#WorldViewerModule'
        component: SearchComponent
    },
    // {
        // path: '',
        // component: ConfigComponent,
        // loadChildren: 'app/views/configuarations/config.module#ConfigModule'
    // },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
