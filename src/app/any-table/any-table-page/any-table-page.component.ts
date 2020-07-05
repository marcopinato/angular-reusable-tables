import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/types/dog.type';
import { Car } from 'src/app/types/car.type';
import { Person } from 'src/app/types/person.type';

@Component({
  selector: 'app-any-table-page',
  templateUrl: './any-table-page.component.html',
  styleUrls: ['./any-table-page.component.css'],
})
export class AnyTablePageComponent implements OnInit {
  public carsColumns = ['manufacturer', 'model', 'powerSupply'];
  public carsRows: Car[] = [
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

  public dogsColumns = ['name', 'breed', 'weightInKg'];
  public dogsRows: Dog[] = [
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

  public peopleColumns = ['firstName', 'lastName', 'dateOfBirth'];
  public peopleRows: Person[] = [
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

  ngOnInit(): void {}
}
