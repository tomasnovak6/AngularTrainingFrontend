import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar} from './ICar';
import { catchError, map} from 'rxjs/operators';
import { GlobalService } from '../global/global.service';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/AngularTraining/AngularTrainingBackend/api';
  cars: ICar[] = [];

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {}

  getCars(): Observable<ICar[]> {
    // todo: napsat service pro GET pozadavek z `${this.baseUrl}/list`
    // metody addCar(), updateCar() a deleteCar() se budou delat po uspesne implementaci getCars()

    return this.http.get<ICar[]>(`${this.baseUrl}/list`).pipe(
      map((car) => {
        // @ts-ignore
        this.cars = car['data'];
        return this.cars;
      }),
      catchError(this.globalService.handleError)
    );
  }

  addCar(car: ICar) {
    // ${this.baseUrl}/store


  }

  updateCar(id: number, car: ICar) {

  }

  deleteCar(id: number) {

  }

}