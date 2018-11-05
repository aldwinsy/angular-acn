import { NgModule } from '@angular/core';
import { SharedModule } from 'sasi/shared/shared.module';
import { ConfigComponent } from 'sasi/views/configurations/config.component';
import { ConfigDataServerComponent } from 'sasi/views/configurations/config-data-server/config-data-server.component';
import { ConfigRoutingModule } from 'sasi/views/configurations/config-routing.module';
import { ConfigFileAgentComponent } from './config-file-agent/config-file-agent.component';
import { ConfigRestartAgentComponent } from './config-restart-agent/config-restart-agent.component';

@NgModule({
  declarations: [
    ConfigComponent,
    ConfigDataServerComponent,
    ConfigFileAgentComponent,
    ConfigRestartAgentComponent
  ],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ],
  exports: [ConfigRoutingModule],
  providers: []
})
export class ConfigModule { }
