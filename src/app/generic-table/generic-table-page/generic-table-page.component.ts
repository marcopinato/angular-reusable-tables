import { Component, OnInit } from '@angular/core';
import { Column } from '../types/column.type';
import { Car } from 'src/app/types/car.type';
import { Row } from '../types/row.type';
import { Dog } from 'src/app/types/dog.type';
import { Person } from 'src/app/types/person.type';

@Component({
  selector: 'app-generic-table-page',
  templateUrl: './generic-table-page.component.html',
  styleUrls: ['./generic-table-page.component.css'],
})
export class GenericTablePageComponent implements OnInit {
  public carsColumns: Column<Car>[] = [
    { name: 'manufacturer' },
    { name: 'model' },
    { name: 'powerSupply' },
  ];
  public carsRows: Row<Car>[] = [
    {
      values: {
        manufacturer: 'Tesla',
        model: 'Model 3',
        powerSupply: 'electricity',
      },
    },
    {
      values: {
        manufacturer: 'Ferrari',
        model: '458',
        powerSupply: 'petrol',
      },
    },
  ];

  public dogsColumns: Column<Dog>[] = [
    { name: 'name' },
    { name: 'breed' },
    { name: 'weightInKg' },
  ];
  public dogsRows: Row<Dog>[] = [
    {
      values: {
        name: 'Charlie',
        breed: 'Basset Hound',
        weightInKg: 30,
      },
    },
    {
      values: {
        name: 'Bella',
        breed: 'Cocker Spaniel',
        weightInKg: 15,
      },
    },
  ];

  public peopleColumns: Column<Person>[] = [
    { name: 'firstName' },
    { name: 'lastName' },
    { name: 'dateOfBirth' },
  ];
  public peopleRows: Row<Person>[] = [
    {
      values: {
        firstName: 'Max',
        lastName: 'Smith',
        dateOfBirth: new Date(1991, 3, 29),
      },
    },
    {
      values: {
        firstName: 'Daniel',
        lastName: 'Jones',
        dateOfBirth: new Date(1991, 11, 10),
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
