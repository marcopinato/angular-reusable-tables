import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericTablePageComponent } from './generic-table-page/generic-table-page.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [GenericTableComponent, GenericTablePageComponent],
  imports: [CommonModule, MatTableModule],
})
export class GenericTableModule {}
