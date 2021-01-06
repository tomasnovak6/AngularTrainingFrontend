import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ICar } from '../ICar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
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

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}