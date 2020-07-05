import { Component } from '@angular/core';
import { Person } from 'src/app/types/person.type';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent {
  public displayedColumns = ['firstName', 'lastName', 'dateOfBirth'];
  public dataSource: Person[] = [
    {
      firstName: 'Max',
      lastName: 'Smith',
      dateOfBirth: new Date(1991, 3, 29),
    },
    {
      firstName: 'Daniel',
      lastName: 'Jones',
      dateOfBirth: new Date(1991, 11, 10),
    },
  ];

  constructor() {}
}
