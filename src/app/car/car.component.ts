import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { ICar } from './ICar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: ICar[] = [];

  error = '';
  success = '';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(
      (car) => {
        this.cars = car;
      },
      (e) => {
        console.error('error', e);
      }
    );
  }

  addCar(car: ICar): void {

  }

  deleteCar(id: number): void {

  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}