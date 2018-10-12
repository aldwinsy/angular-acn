import { PageNotFoundComponent } from 'sasi/core/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from 'sasi/views/configurations/config.component';
import { ConfigDataServerComponent } from 'sasi/views/configurations/config-data-server/config-data-server.component';
import { ConfigFileAgentComponent } from 'sasi/views/configurations/config-file-agent/config-file-agent.component';
import { ConfigRestartAgentComponent } from 'sasi/views/configurations/config-restart-agent/config-restart-agent.component';

const routes: Routes = [
    {
        path: 'config',
        component: ConfigComponent,
        children: [
            {
                path: '',  redirectTo: '/config/data-server', pathMatch: 'full'
            },
            {
              path: 'data-server',
              component: ConfigDataServerComponent
            },
            {
                path: 'file-agent',
                component: ConfigFileAgentComponent
            },
            {
                path: 'restart-agent',
                component: ConfigRestartAgentComponent
            },
            {
              path: '**',
              component: PageNotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigRoutingModule { }
