import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { ICar } from './ICar';
import {Observable} from "rxjs";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  public cars: any;

  error = '';
  success = '';

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.getCars();

    console.log('cars 2', this.cars);
  }

  getCars(): void {
    this.carService.getCars().subscribe(
      (res) => {
        console.log('res', res);

        this.cars = res;
      },
      (e) => {
        console.log(e);
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
