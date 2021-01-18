import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tollgate',
  templateUrl: './tollgate.component.html',
  styleUrls: ['./tollgate.component.css']
})
export class TollgateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage:string="assets/images/map.jpg"
  selected = 'option2';
}
