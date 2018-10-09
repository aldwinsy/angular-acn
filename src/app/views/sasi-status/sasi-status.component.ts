import { Component, OnInit } from '@angular/core';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';

@Component({
  selector: 'app-sasi-status',
  templateUrl: './sasi-status.component.html',
  styleUrls: ['./sasi-status.component.scss']
})
export class SasiStatusComponent implements OnInit {
  data1 = [];
  data2 = [];

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => this.data1 = data);

      this.sasiStatusService.getSasiStatusWorldObjects()
      .subscribe(data => this.data2 = data);
  }

}
