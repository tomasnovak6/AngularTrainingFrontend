import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { ICar } from './ICar';

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
    this.cars = this.getCars();

    console.log('cars 2', this.cars);
  }

  getCars() {
    // todo: dopsat nacteni seznamu aut
    return this.carService.getCars()
        .subscribe(cars => {
          return cars;


          // console.log('cars', this.cars);
        });
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
