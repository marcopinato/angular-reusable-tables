import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuplicateTablesComponent } from './duplicate-tables/duplicate-tables/duplicate-tables.component';
import { AnyTablePageComponent } from './any-table/any-table-page/any-table-page.component';
import { GenericTablePageComponent } from './generic-table/generic-table-page/generic-table-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'duplicate-tables', pathMatch: 'full' },
  { path: 'duplicate-tables', component: DuplicateTablesComponent },
  { path: 'any-table', component: AnyTablePageComponent },
  { path: 'generic-table', component: GenericTablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
