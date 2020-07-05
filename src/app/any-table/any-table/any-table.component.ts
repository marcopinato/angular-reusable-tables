import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-any-table',
  templateUrl: './any-table.component.html',
  styleUrls: ['./any-table.component.css'],
})
export class AnyTableComponent implements OnInit {
  @Input() columns: string[];
  @Input() rows: any[];

  public dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.rows;
  }
}
