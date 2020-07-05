import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeLink = 'duplicate-tables';
  public links = [
    { name: 'duplicate tables', path: 'duplicate-tables' },
    { name: 'table: any', path: 'any-table' },
    { name: 'generic table', path: 'generic-table' },
  ];
}
