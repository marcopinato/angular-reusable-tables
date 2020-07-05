import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnyTableComponent } from './any-table/any-table.component';
import { AnyTablePageComponent } from './any-table-page/any-table-page.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AnyTableComponent, AnyTablePageComponent],
  imports: [
    CommonModule, MatTableModule
  ]
})
export class AnyTableModule { }
