import { Component } from '@angular/core';
import { Dog } from 'src/app/types/dog.type';

@Component({
  selector: 'app-dogs-table',
  templateUrl: './dogs-table.component.html',
  styleUrls: ['./dogs-table.component.css'],
})
export class DogsTableComponent {
  public displayedColumns = ['name', 'breed', 'weightInKg'];
  public dataSource: Dog[] = [
    {
      name: 'Charlie',
      breed: 'Basset Hound',
      weightInKg: 30,
    },
    {
      name: 'Bella',
      breed: 'Cocker Spaniel',
      weightInKg: 15,
    },
  ];

  constructor() {}
}
