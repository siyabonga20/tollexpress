import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string="assets/images/car.jpg"
  myimage1:string="assets/images/bus.jpg"
  myimage2:string="assets/images/bus2.png"
  myimage3:string="assets/images/truck.png"
  myimage4:string="assets/images/truck2.png"
  myimage5:string="assets/images/truck3.jpg"
  selected = 'option2';
}
