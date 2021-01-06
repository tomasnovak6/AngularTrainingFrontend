import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { ICar } from './ICar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
 

  constructor(private carService: CarService) {}

  ngOnInit() {
    
  }


}