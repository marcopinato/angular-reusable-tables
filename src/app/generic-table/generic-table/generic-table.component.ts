import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../types/column.type';
import { Row } from '../types/row.type';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent<T> implements OnInit {
  @Input() columns: Column<T>[];
  @Input() rows: Row<T>[];

  public dataSource = new MatTableDataSource<Row<T>>();
  public columnNames: string[];

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.rows;
    this.columnNames = this.columns.map((column) => column.name.toString());
  }
}
