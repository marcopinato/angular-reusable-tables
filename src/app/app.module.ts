import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { DuplicateTablesModule } from './duplicate-tables/duplicate-tables.module';
import { GenericTableModule } from './generic-table/generic-table.module';
import { AnyTableModule } from './any-table/any-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    DuplicateTablesModule,
    GenericTableModule,
    AnyTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
