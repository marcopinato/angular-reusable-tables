import { Component } from '@angular/core';
import { Car } from 'src/app/types/car.type';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css'],
})
export class CarsTableComponent {
  public displayedColumns = ['manufacturer', 'model', 'powerSupply'];
  public dataSource: Car[] = [
    {
      manufacturer: 'Tesla',
      model: 'Model 3',
      powerSupply: 'electricity',
    },
    {
      manufacturer: 'Ferrari',
      model: '458',
      powerSupply: 'petrol',
    },
  ];

  constructor() {}
}
