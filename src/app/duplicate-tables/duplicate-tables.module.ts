import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsTableComponent } from './dogs-table/dogs-table.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { DuplicateTablesComponent } from './duplicate-tables/duplicate-tables.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DogsTableComponent,
    CarsTableComponent,
    PeopleTableComponent,
    DuplicateTablesComponent,
  ],
    imports: [CommonModule, MatTableModule],
})
export class DuplicateTablesModule {}
