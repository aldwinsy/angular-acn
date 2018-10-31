import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-sasi-mat-table',
  templateUrl: './sasi-mat-table.component.html',
  styleUrls: ['./sasi-mat-table.component.scss']
})
export class SasiMatTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  @Input() public data: any;
  @Input() public columnObjects: any; // object containing the details of the column (label, propName, type)
  @Input() public hasSelectAll: any = true;
  @Input() public sortedColumn: string; // set initially sorted column
  @Input() public isSortDisabled = false;
  @Input() public stickyHeader = true;

  @Output() private selectionEvent: any = new EventEmitter<any>();
  @Output() private sortChange: any = new EventEmitter<any>();

  public columnObjectsNoSelect: any;
  public displayedColumns: string[];

  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);



  constructor() { }

  ngOnInit() {
    this.columnObjectsNoSelect = this.columnObjects.filter(col => col.propName !== 'select');
    this.displayedColumns = this.columnObjects.map(colObj => colObj.propName);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  sortData(property) {
    console.log(property);
    this.sortChange.emit(property);
  }

}
