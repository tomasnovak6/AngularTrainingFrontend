import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Někde nastala chyba!');
  }

}