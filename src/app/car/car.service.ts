import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car} from './car';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost/AngularTraining/AngularTrainingBackend/api';
  cars: any;

  constructor(private http: HttpClient) {

  }

  getCars(): Observable<Car[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        this.cars = res['data'];
        return this.cars;
      }),
      catchError(this.handleError));
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post(`${this.baseUrl}/store`, { data: car })
      .pipe(map((res: any) => {
          this.cars.push(res['data']);
          return this.cars;
        }),
        catchError(this.handleError));
  }

  deleteCar(id: number): Observable<Car[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map(res => {
          const filteredCars = this.cars.filter((car: any) => {
            return +car['id'] !== +id;
          });
          return this.cars = filteredCars;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    return throwError('Error! something went wrong.');
  }

}
