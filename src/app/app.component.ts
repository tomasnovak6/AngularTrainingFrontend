import { Component } from '@angular/core';
import { CarService } from './car/car.service';
import { Car } from './car/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Training car rental';

  cars: any;
  error = '';
  success = '';

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(
      (res: Car[]) => {
        this.cars = res;
      }, (err) => {
        this.error = err;
      }
    );
  }

  addCar(car: Car): void {

  }

  deleteCar(id: number): void {

  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}
