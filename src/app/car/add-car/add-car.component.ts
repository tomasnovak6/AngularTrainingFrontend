import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

    headline = 'Add car';
    addCarForm = new FormGroup({
    model: new FormControl(''),
    price: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  addSubmit(): void {
    console.log('tady se bude ukladat');
  }

}
