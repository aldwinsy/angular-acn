import { Component, OnInit } from '@angular/core';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';

@Component({
  selector: 'app-sasi-status',
  templateUrl: './sasi-status.component.html',
  styleUrls: ['./sasi-status.component.scss']
})
export class SasiStatusComponent implements OnInit {
  statusTime = [];
  worldObjects = [];
  dataAgentList = [];

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => this.statusTime = data);

    this.sasiStatusService.getSasiStatusWorldObjects()
      .subscribe(data => this.worldObjects = data);

    this.sasiStatusService.getSasiStatusAgentList()
      .subscribe(data => this.dataAgentList = data);

    this.sasiStatusService.getData()
      .subscribe(() => console.log('Got it!'));
  }

}
