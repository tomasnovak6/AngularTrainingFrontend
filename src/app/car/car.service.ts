import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICar} from './ICar';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/AngularTraining/AngularTrainingBackend/api';
  cars: any;

  constructor(private http: HttpClient) {

  }

  getCars(): Observable<any[]> {
    // todo: napsat service pro GET pozadavek z `${this.baseUrl}/list`
    // metody addCar(), updateCar() a deleteCar() se budou delat po uspesne implementaci getCars()

    return this.http.get<any[]>(`${this.baseUrl}/list`);
    
  }

  addCar(car: ICar) {
  }

  updateCar(id: number, car: ICar) {

  }

  deleteCar(id: number) {

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    return throwError('Error! something went wrong.');
  }

}
